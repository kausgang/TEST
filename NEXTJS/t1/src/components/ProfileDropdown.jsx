"use client";
import { Dropdown, Avatar } from "rsuite";

// (Optional) Import component styles. If you are using Less, import the `index.less` file.
import "rsuite/Dropdown/styles/index.css";

const ProfileDropdown = () => {
  const renderToggle = (props) => (
    <Avatar circle {...props} src="https://i.pravatar.cc/150?u=1" />
  );
  return (
    // <Dropdown renderToggle={renderToggle}>
    //   <Dropdown.Item panel style={{ padding: 10, width: 160 }}>
    //     <p>Signed in as</p>
    //     <strong>Tony</strong>
    //   </Dropdown.Item>
    //   <Dropdown.Separator />
    //   <Dropdown.Item>Your profile</Dropdown.Item>
    //   <Dropdown.Item>Your stars</Dropdown.Item>
    //   <Dropdown.Item>Your Gists</Dropdown.Item>
    //   <Dropdown.Separator />
    //   <Dropdown.Item>Help</Dropdown.Item>
    //   <Dropdown.Item>Settings</Dropdown.Item>
    //   <Dropdown.Item>Sign out</Dropdown.Item>
    // </Dropdown>

    <Dropdown renderToggle={renderToggle}>
      <Dropdown.Item
        panel
        //   style={{ padding: 10, width: 160 }}
      >
        <p>Signed in as</p>
        <strong>Tony</strong>
      </Dropdown.Item>
      <Dropdown.Separator />
      <Dropdown.Item>Your profile</Dropdown.Item>
      <Dropdown.Item>Your stars</Dropdown.Item>
      <Dropdown.Item>Your Gists</Dropdown.Item>
      <Dropdown.Separator />
      <Dropdown.Item>Help</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
  );
};

export default ProfileDropdown;
