import React, { useState } from 'react'
import Results from './ResultsInterface';
import { Button, Divider, Flex, Modal } from 'antd';

interface ResultsProps{
    results: Results;
    gameState: 'waitStart' | 'showElems' | 'selectElems' | 'PrintResult'
}

function ResultsZifras({results, gameState}: ResultsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errors1, setErrors1] = useState(0);
  const [errors2, setErrors2] = useState(0);


  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };



  function countErrors(results: Results){
    let errorsInFirstList = 0;
    let errorsInSecondList = 0;
    //элементы которые он не ввел
    //элементы которые лишние

  
    // Подсчет ошибок в первом списке (results[1])
    results[1][1].forEach((userValue, index) => {
      if (!results[1][0].includes(userValue)) {
        errorsInFirstList++;
      }
    });
    results[1][0].forEach((userValue, index) => {
      if (!results[1][1].includes(userValue)) {
        errorsInFirstList++;
      }
    });
  
    // Подсчет ошибок во втором списке (results[2])
    results[2][1].forEach((userValue, index) => {
      if (!results[2][0].includes(userValue)) {
        errorsInSecondList++;
      }
    });

    results[2][0].forEach((userValue, index) => {
      if (!results[2][1].includes(userValue)) {
        errorsInSecondList++;
      }
    });
    setErrors1(errorsInFirstList)
    setErrors2(errorsInSecondList)
  
  }





  return (
    <Flex vertical style={{ display: gameState === 'PrintResult' ? 'flex' : 'none' }}>
      <div>
        <h4>stage1</h4>
        <p>Было</p>
        <Flex style={{ margin: '0 auto' }} justify='center'>
          {results[1][1].sort().map(number => (
            <div
              key={number}
              style={{
                maxWidth: '70px',
                border: '1px solid gray',
                borderRadius: '5px',
                margin: '0.5rem',
                padding: '1rem',
              }}
            >
              {number}
            </div>
          ))}
        </Flex>
        <p>Вы выбрали</p>
        <Flex style={{ margin: '0 auto' }} justify='center'>
          {results[1][0].sort().map(number => (
            <div
              key={number}
              style={{
                maxWidth: '70px',
                border: '1px solid gray',
                borderRadius: '5px',
                margin: '0.5rem',
                padding: '1rem',
              }}
            >
              {number}
            </div>
          ))}
        </Flex>
      </div>
      

      <Divider />
      <div>
        <h4>stage2</h4>
        <p>Было</p>
        <Flex style={{ margin: '0 auto' }} justify='center'>
          {results[2][1].sort().map(number => (
            <div
              key={number}
              style={{
                maxWidth: '70px',
                border: '1px solid gray',
                borderRadius: '5px',
                margin: '0.5rem',
                padding: '1rem',
              }}
            >
              {number}
            </div>
          ))}
        </Flex>
        <p>Вы выбрали</p>
        <Flex style={{ margin: '0 auto' }} justify='center'>
          {results[2][0].sort().map(number => (
            <div
              key={number}
              style={{
                maxWidth: '70px',
                border: '1px solid gray',
                borderRadius: '5px',
                margin: '0.5rem',
                padding: '1rem',
              }}
            >
              {number}
            </div>
          ))}
        </Flex>
      </div>







      <Modal title="Допущенные ошибки" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>На 1 этапе допущено: {errors1} ошибок</p>
        <Divider/>
        <p>На 2 этапе допущено: {errors2} ошибок</p>
      </Modal>

      <Button onClick={()=> {countErrors(results); setIsModalOpen(true)}}>Вывести статистику</Button>
    </Flex>
  )
}

export default ResultsZifras