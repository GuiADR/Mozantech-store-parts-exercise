import React, { useState, useEffect } from 'react';
import { MdOutlineArrowUpward, MdOutlineArrowDownward, MdViewList, MdViewModule } from 'react-icons/md';
import GridView from '../../components/gridView';
import Input from '../../components/inputs';
import ListView from '../../components/listView';
import LoadingSpinner from '../../components/loadingSpinner';
import api from '../../utils/api';
import { Container } from './styles';


const Home: React.FC = () => {
  const [parts, setParts] = useState([]);
  const [partsOrder, setPartsOrder] = useState([]);
  const [orderBy, setOrderBy] = useState('');
  const [allTypes, setAllTypes] = useState([]);
  const [type, setType] = useState('');
  const [query, setQuery] = useState('');
  const [view, setView] = useState('list');
  const [load, setLoad] = useState(true);

  async function getParts() {

    const newParts = await api.get('/store/parts', {
      params: {
        type: type,
        query: query.toLowerCase()
      }
    });
    setParts(newParts.data);
    handleOrderBy(newParts.data);
  };

  async function getTypes() {
    const newTypes = await api.get('/store/part-types');
    setAllTypes(newTypes.data);
  }

  function handleOrderBy(newParts: never[]) {
    console.log(newParts);
    let newOrder = newParts.slice();
    console.log(newOrder);
    console.log(orderBy);
    if (orderBy !== '') {
      if (newOrder.length <= 0)
        return;
      newOrder = newOrder.sort((a: { price: string; }, b: { price: string; }) => {
        return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''))
      });
      if (orderBy === 'desc') {
        newOrder = newOrder.reverse();

      }
    }

    setPartsOrder(newOrder);
  }

  function handleChangeOrder(order: String) {
    if (order === '')
      setOrderBy('asc');
    if (order === 'asc')
      setOrderBy('desc');
    if (order === 'desc')
      setOrderBy('');
  }

  useEffect(() => {
    const loadContent = async () => {
      setLoad(true);
      await getParts();
      if (allTypes.length <= 0)
        await getTypes();
      setLoad(false);
    }
    loadContent();
  }, [type, query]);

  useEffect(() => {
    handleOrderBy(parts);
  }, [orderBy]);

  function changeView() {
    if (view === 'list')
      setView('grid');
    if (view === 'grid')
      setView('list');
  }
  useEffect(() => {

  }, [])

  return (
    <section>
      <Container>
        <div>
          <Input input={<input type='search' placeholder='Search...' value={query} onChange={e => setQuery(e.target.value)}></input>} />
          <Input input={
            <div>
              <select onChange={e => setType(e.target.value)}>
                <option value=''>-- Type --</option>
                {allTypes.map((value: string, key: number) => {
                  return (<option value={value} key={key}>{value}</option>)
                })}
              </select>
            </div>
          } />
          <div>
            <Input input={
              <button onClick={() => { changeView() }}>{(view === 'list') ?
                <MdViewList size={40} /> :
                <MdViewModule size={40} />
              }</button>
            } />
            <Input input={
              <button
                onClick={() => { handleChangeOrder(orderBy) }}>
                {(orderBy === 'asc') ?
                  <MdOutlineArrowUpward size={20} /> :
                  (orderBy === 'desc') ?
                    <MdOutlineArrowDownward size={20} /> :
                    <>
                      <MdOutlineArrowDownward size={20} />
                      <MdOutlineArrowUpward size={20} />
                    </>
                }</button>
            } />
          </div>
        </div>
        {(load) ? <LoadingSpinner /> : (view === 'list') ? <ListView items={partsOrder} /> : <GridView items={partsOrder} />}
      </Container>
    </section>
  )
};

export default Home;