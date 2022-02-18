import React from 'react'
import { Dropdown, Menu, Image, Icon } from 'semantic-ui-react'

export default function SignedIn({SignedOut}) {
  return (
    <div>

      <Menu.Item>
        <Image avatar spaced="right" src="https://w3.sdu.edu.tr/assets/img/sdu-logo.png"></Image>
        <Dropdown pointing="top left" text="Kubilay">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" />
            <Dropdown.Item onClick={SignedOut} text="Çıkış Yap" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>

    </div>
  )
}
