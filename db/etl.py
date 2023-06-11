import pandas as pd
from pymongo import MongoClient
import os
import dotenv
from sqlalchemy import create_engine, text

dotenv.load_dotenv()

cities = pd.read_csv('worldcities.csv')
cities = cities.drop(["city_ascii","iso2","iso3","capital","population","id"], axis = 1)

print(list(cities))



database = "travel_gallery"
dbUser = os.getenv("PG_USER")
dbPwd= os.getenv("PG_PASSWORD")
engine = create_engine('postgresql://'+ dbUser +':'+ dbPwd +'@localhost:5432/' + database)
cities.to_sql('cities', engine, if_exists='append')
with engine.begin() as conn:
    #add index
    conn.execute(text('''CREATE INDEX city ON cities(city)'''))
    conn.execute(text('''ALTER TABLE cities ADD PRIMARY KEY (index)'''))

engine.dispose()