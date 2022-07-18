import React, { useContext } from 'react';
import { MdOutlineNoPhotography } from 'react-icons/md'
import { Context } from '../../context/partsContext';
import { Card } from './styles';

const Parts: React.FC = () => {

  const { parts } = useContext(Context);
  return (
    <Card>
      <div className='part__description'>
        <span>{parts?.name}</span>
        <span>{parts?.price}</span>
        <span>{parts?.type}</span>
      </div>
      <div className='photo__container'>
        <div>
          <MdOutlineNoPhotography size={100} />
        </div>
      </div>
    </Card>
  )
};

export default Parts;