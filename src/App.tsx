// ========== App
// import all modules
import React, { useEffect, useState } from 'react';
import {
  Hero,
  Title,
  Container,
  TextBold,
  Subtitle,
  TableHero,
  TableTitle,
  Row,
  Col,
  SearchField,
  Select,
  Table,
  Thead,
  TableRow,
  TableHead,
  TableBody,
} from './styles';
import { Head, TableDataComponent } from './components';
import { Sorting } from './constants';
import database from './db/db.json';
import { IAppStates, IData, IReactSelectValue } from './interfaces';
import { filterTheArchivedData } from './hooks';

const db = database.map((item) => ({
  ...item,
  archived: String(item.archived).toLowerCase(),
  name: String(item.name).toLowerCase(),
  status: String(item.status).toLowerCase(),
  type: String(item.type).toLowerCase(),
}));

const App: React.FC = () => {
  const [state, setState] = useState<IAppStates>({
    keyword: '',
    loading: false,
    data: db,
    sortingBy: 'ASC',
  });

  const onChangeText = (event: React.ChangeEvent<HTMLInputElement>, name: string) => {
    setState((currentState) => ({
      ...currentState,
      [name]: event.target.value,
    }));
  };

  const handleSelect = (value: IReactSelectValue) => {
    setState((currentState) => ({
      ...currentState,
      sortingBy: value.value,
    }));
  };

  useEffect(() => {
    const handleArchivedData = async () => {
      setState((currentState) => ({
        ...currentState,
        loading: true,
      }));

      try {
        const data: IData[] = await filterTheArchivedData(state.data, state.sortingBy, state.keyword);

        setTimeout(() => {
          setState((currentState) => ({
            ...currentState,
            loading: false,
            data,
          }));
        }, 500);
      } catch (err) {
        setTimeout(() => {
          setState((currentState) => ({
            ...currentState,
            loading: false,
            data: [],
          }));
        }, 500);
      }
    };

    handleArchivedData();
  }, [state.sortingBy, state.keyword]);

  return (
    <Hero>
      <Head />
      <Container size={90}>
        <Title>
          <TextBold>Hello</TextBold>
          {' '}
          Mathius
        </Title>
        <Subtitle>
          Here are the list of projects you submitted
        </Subtitle>
        <TableHero>
          <Container size={95}>
            <Row alignCenter marginTop={0}>
              <Col flex={1.8} width={0}>
                <TableTitle>Recent Projects</TableTitle>
              </Col>
              <Col flex={1} width={0} flexEnd>
                <Row spaceBetween marginTop={0}>
                  <Col flex={2} width={48}>
                    <SearchField
                      type="search"
                      value={state.keyword}
                      placeholder="Search..."
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeText(e, 'keyword')}
                    />
                  </Col>
                  <Col flex={1} width={48}>
                    <Select
                      options={Sorting}
                      placeholder="Sorting"
                      defaultValue={{
                        value: 'asc',
                        label: 'Ascending',
                      }}
                      onChange={(value) => {
                        if (JSON.parse(JSON.stringify(value)).value === 'ASC') {
                          handleSelect({
                            label: 'Ascending',
                            value: 'ASC',
                          });
                        } else {
                          handleSelect({
                            label: 'Descending',
                            value: 'DESC',
                          });
                        }
                      }}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row marginTop={2}>
              <Col width={100} flex={0}>
                <Table>
                  <Thead>
                    <TableRow>
                      <TableHead>
                        Name
                      </TableHead>
                      <TableHead>
                        Status
                      </TableHead>
                      <TableHead>
                        Type
                      </TableHead>
                      <TableHead>
                        Created
                      </TableHead>
                    </TableRow>
                  </Thead>
                  <TableBody>
                    <TableDataComponent
                      data={state.data}
                      loading={state.loading}
                    />
                  </TableBody>
                </Table>
              </Col>
            </Row>
          </Container>
        </TableHero>
      </Container>
    </Hero>
  );
};

export default App;
