import { Button, Divider, Flex } from 'antd';
import React, { useState } from 'react'
import Pikto from './Pikto';
import Results from './ResultsInterface';

function TestPikts() {
    const [results, setResults] = useState<Results>({
        1: [[], []],
        2: [[], []],
      });
      const [zifri, setZifri] = useState<number[]>([ 1, 2, 3, 4, 5, 6, 7, 8, 9]);
      const [stage, setStage] = useState<number>(1);
      const [numbers, setNumbers] = useState<number[]>([]);
      const [selected, setSelected] = useState<number[]>([]);
      const [gameState, setGameState] = useState<'waitStart'| 'showElems' | 'selectElems' | 'PrintResult'>('waitStart');
    
      const generateNumbers = () => {
        let local_numbers: number[] = [];
    
        while (local_numbers.length < 6) {
          var n: number = Math.floor(Math.random() * (9) + 1);
          if (!local_numbers.includes(n)) {
            local_numbers.push(n);
          }
        }
        setNumbers(local_numbers);
        setResults(prevResults => {
          const newResults = { ...prevResults };
          if (stage === 1) {
            newResults[stage] = [prevResults[stage][0], local_numbers];
          }
          if (stage === 2) {
            newResults[stage] = [prevResults[stage][0], local_numbers];
          }
          return newResults;
        });
      };
    
      const changeSelected = (number: number) => {
        if (selected.includes(number)) {
          setSelected((prev) => prev.filter(n => n !== number));
        } else {
          setSelected([...selected, number]);
        }
      };
    
    
      const setStateShown = () =>{
            generateNumbers();
            setGameState('showElems');
            setTimeout(() => {
                setGameState('selectElems');
            }, 5000);
      }
    
      const handleSelectClicked = () => {
        const local_stage = stage;
        setResults(prevResults => {
          const newResults = { ...prevResults };
          if (stage === 1) {
            newResults[stage] = [selected, prevResults[stage][1]];
          }
          if (stage === 2) {
            newResults[stage] = [selected, prevResults[stage][1]];
          }
          return newResults;
        });
        setSelected([]);
        setStage(prev => prev + 1);
        if (local_stage + 1 === 2) {
            setStateShown();
        }
    
        if (local_stage + 1=== 3) {
          setGameState('PrintResult')
        }
      };
    
      return (
        <>
          <h1>Тестирование на 1 гипотезу</h1>
          <p>Вам нужно выбрать как можно больше объектов, которые вы увидели</p>
          <Divider/>
          <Flex style={{ margin: '0 auto', display: gameState === "showElems" ? 'flex': 'none'}} justify='center'>
           {numbers.map((number) => (
            <div style={{ maxWidth: '70px', border: '1px solid gray', borderRadius: '5px', margin: '0.5rem', padding: '1rem'}}>
              {stage === 1 && number}
              {stage === 2 && <Pikto number={number}/>}
            </div>
           ))}
           
          </Flex>
    
    
    
    
          {gameState === 'selectElems'
            &&
            <p style={{alignSelf: 'start',justifySelf: 'center', textAlign: 'center', textDecoration: 'underline'}}>
              Выберите цифры, которые вы увидели
            </p>
          }
          <Flex style={{ margin: '0 auto', display: gameState === 'selectElems'? 'flex': 'none'}} justify='center'>
            
            {
            zifri.map((number, index) => (
              <div 
                key={number}
                style={{
                background: selected.includes(number) ? 'gray' : 'white', 
                maxWidth: '70px',
                border: '1px solid gray',
                borderRadius: '5px',
                margin: '0.5rem',
                padding: '1rem',
                cursor: 'pointer'
              }}
                onClick={() => changeSelected(number)}
              >
                {stage === 1 && number}
                {stage === 2 && <Pikto number={number}/>}
              </div>
            ))
            }
          </Flex>
    
    
          {gameState === "waitStart" &&
            <Button onClick={() => {
                setStateShown();
            }}
             type='primary'
            style={{background: 'green'}}>
              Начать
            </Button>
          }
          
          
          {gameState === "selectElems" &&
          <Button onClick={handleSelectClicked} type='primary' style={{background: 'red'}}>
            Выбрать ответ
          </Button>
          }
        </>
      )
}

export default TestPikts