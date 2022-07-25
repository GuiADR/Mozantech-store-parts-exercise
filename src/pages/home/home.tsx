import React, { useState, useEffect } from 'react';
import { MdOutlineArrowUpward, MdOutlineArrowDownward, MdViewList, MdViewModule, MdOutlineClose } from 'react-icons/md';
import EmptyView from '../../components/emptyView';
import GridView from '../../components/gridView';
import Input from '../../components/inputs';
import ListView from '../../components/listView';
import LoadingSpinner from '../../components/loadingSpinner';
import api from '../../utils/api';
import { Container } from './styles';


const Home: React.FC = () => {
  const [parts, setParts] = useState<any>([]);
  const [partsOrder, setPartsOrder] = useState<any>([]);
  const [orderBy, setOrderBy] = useState('');
  const [allTypes, setAllTypes] = useState([]);
  // const [type, setType] = useState('');
  const [types, setTypes] = useState<string[]>([]);
  const [query, setQuery] = useState('');
  const [view, setView] = useState('list');
  const [load, setLoad] = useState(true);

  async function getParts() {

    let newParts: any[] = [];
    let queriesLop = query.trim().split(' ');
    let typesLop = [...types];

    if (typesLop.length <= 0)
      typesLop.push('');
    if (queriesLop.length <= 0)
      queriesLop.push('');

    for (let type of typesLop) {
      for (let q of queriesLop) {
        setLoad(true);
        const partsData = await api.get('/store/parts', {
          params: {
            type: type,
            query: q.toLowerCase()
          }
        });
        newParts = [...newParts, ...partsData.data];
      }
    }


    setParts(newParts);
    handleOrderBy(newParts);
  };

  async function getTypes() {
    const newTypes = await api.get('/store/part-types');
    setAllTypes(newTypes.data);
  }

  function handleOrderBy(newParts: any[]) {
    let newOrder = newParts.slice();
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

  function checkType(type: string) {
    if (!types.includes(type))
      setTypes([...types, type]);
    else {
      setTypes(types.filter(value => value !== type));
    }

  }
  useEffect(() => {
    const loadContent = async () => {
      await getParts();
      if (allTypes.length <= 0)
        await getTypes();
      setLoad(false);
    }
    loadContent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [types, query]);

  useEffect(() => {
    handleOrderBy(parts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <Input className='typesList' input={
            <div >
              <div>
                {(types.length <= 0) ?
                  <div className='empty'>-- Types --</div>
                  :
                  <div className='notEmpty'>
                    {types.map((value: string, key: number) => {

                      return (<span key={key}>{value} <MdOutlineClose onClick={() => { checkType(value) }} /></span>)
                    })}
                  </div>
                }
              </div>
              <ul>
                {allTypes.map((value: string, key: number) => {
                  return (<li onClick={() => { checkType(value) }} className={(types.includes(value) ? 'checked' : '')} value={value} key={key}>{value}</li>)
                })}
              </ul>
            </div>
          } />
          {(load) ? <div>

            <LoadingSpinner maxSize={false} />
          </div> :

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
            </div>}
        </div>
        {
          (load && parts.length <= 0) ? <LoadingSpinner /> :
            (!load && parts.length <= 0) ? <EmptyView /> :
              (view === 'list') ? <ListView items={partsOrder} /> : <GridView items={partsOrder} />}
      </Container>
    </section>
  )
};

export default Home;