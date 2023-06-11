import {
  Navbar, Text, Avatar, Dropdown, Input, Button,
} from '@nextui-org/react';
import { React } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div style={{}}>
      <Navbar className="navBar" isBordered variant="sticky">
        <Navbar.Brand>
          <Link to={{ pathname: '/' }}>
            <Text color="white" css={{ mr: '$11' }} hideIn="xs">
              Travel Gallery
            </Text>
          </Link>

          <Navbar.Content hideIn="xs" variant="highlight">
            <Link to={{ pathname: '/community' }}>Community</Link>
          </Navbar.Content>
        </Navbar.Brand>
        <Navbar.Content
          css={{
            '@xsMax': {
              w: '100%',
              jc: 'space-between',
            },
          }}
        >
          <Navbar.Item
            css={{
              '@xsMax': {
                w: '100%',
                jc: 'center',
              },
            }}
          >
            <Input
              contentLeftStyling={false}
              css={{
                w: '100%',
                '@xsMax': {
                  mw: '300px',
                },
                '& .nextui-input-content--left': {
                  h: '100%',
                  ml: '$4',
                  dflex: 'center',
                },
              }}
              placeholder="Search by year..."
            />
          </Navbar.Item>
          <Navbar.Item
            css={{
              '@xsMax': {
                w: '100%',
                jc: 'center',
              },
            }}
          >
            <Link
              color="inherit"
              to="/album?year=2021"
            >
              <Text>By Year</Text>
            </Link>
          </Navbar.Item>

          <Navbar.Item
            css={{
              '@xsMax': {
                w: '100%',
                jc: 'center',
              },
            }}
          >
            <Link
              color="inherit"
              to="/album"
            >
              All albums
            </Link>
          </Navbar.Item>
          <Navbar.Item
            css={{
              '@xsMax': {
                w: '100%',
                jc: 'center',
              },
            }}
          >
            <Button size="sm" auto color="gradient" rounded bordered>create new album</Button>
          </Navbar.Item>

          <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  color="primary"
                  size="md"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="User menu actions"
              color="secondary"
              onAction={(actionKey) => console.log({ actionKey })}
            >
              <Dropdown.Item key="profile" css={{ height: '$18' }}>
                <Text b color="inherit" css={{ d: 'flex' }}>
                  Signed in as
                </Text>
                <Text b color="inherit" css={{ d: 'flex' }}>
                  zoey@example.com
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="settings" withDivider>
                My Settings
              </Dropdown.Item>
              <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
              <Dropdown.Item key="analytics" withDivider>
                Analytics
              </Dropdown.Item>
              <Dropdown.Item key="system">System</Dropdown.Item>
              <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
              <Dropdown.Item key="help_and_feedback" withDivider>
                Help & Feedback
              </Dropdown.Item>
              <Dropdown.Item key="logout" withDivider color="error">
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Content>
      </Navbar>
    </div>
  );
}

export default NavBar;
