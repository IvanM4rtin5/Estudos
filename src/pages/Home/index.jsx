import React from "react";
import { FiPlus, FiSearch} from "react-icons/fi";
import { Note} from "../../components/Note"
import { Input } from "../../components/Input"
import { Header } from "../../components/Header"
import { Section} from "../../components/Section"
import { ButtonText } from "../../components/ButtonText"
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles"

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
          <li><ButtonText title="Todos" /></li>
          <li><ButtonText title="Frontend"/></li>
          <li><ButtonText title="React"/></li> 
          <li><ButtonText title="Node"/></li>
      </Menu>

      <Search>
         <Input placeholder="Pesquisar pelo título" icon={FiSearch}/> 
      </Search>

      <Content>
        <Section title="Minhas Notas">
          <Note data={{title:'React', 
            tags: [
              {id: '1',name: 'react'},
              {id: '2',name: 'rocketseat'}
              ]
              }               
              }/>
          
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus/>
        Criar nota
      </NewNote>
    </Container>
  )
}
