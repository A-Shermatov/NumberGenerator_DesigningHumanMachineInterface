import { Button, Divider, Flex } from 'antd';
import React, { useState } from 'react';
import Pikto from './Pikto';
import ResultsSecondTest from './ResultsSecondTest';
import Results from './ResultsInterface';

function SecondTest() {
  const [results, setResults] = useState<Results>({
    1: [[], []],
    2: [[], []],
  });
  const [zifri, setZifri] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [stage, setStage] = useState<number>(1);
  const [numbers, setNumbers] = useState<number[]>([]);
  const [selected, setSelected] = useState<number[]>([]);
  const [gameState, setGameState] = useState<'waitStart' | 'showElems' | 'selectElems' | 'PrintResult'>('waitStart');

  const generateNumbers = (currentStage: number) => {
    let local_numbers: number[] = [];

    while (local_numbers.length < 7) {
      const n: number = Math.floor(Math.random() * 9 + 1);
      if (!local_numbers.includes(n)) {
        local_numbers.push(n);
      }
    }
    setNumbers(local_numbers);
    setResults(prevResults => {
      const newResults = { ...prevResults };
      newResults[currentStage] = [prevResults[currentStage][0], local_numbers]; // Обновляем правильный этап
      return newResults;
    });
  };

  const changeSelected = (number: number) => {
    if (selected.includes(number)) {
      setSelected(prev => prev.filter(n => n !== number));
    } else {
      setSelected(prev => [...prev, number]);
    }
  };

  const setStateShown = (currentStage: number) => {
    generateNumbers(currentStage);
    setGameState('showElems');
    setTimeout(() => {
      setGameState('selectElems');
    }, 1500);
  };

  const handleSelectClicked = () => {
    const local_stage = stage;
    setResults(prevResults => {
      const newResults = { ...prevResults };
      newResults[local_stage] = [selected, prevResults[local_stage][1]];
      return newResults;
    });
    setSelected([]);
    const nextStage = local_stage + 1;
    setStage(nextStage);
    
    if (nextStage === 2) {
      setStateShown(2);
    }

    if (nextStage === 3) {
      setGameState('PrintResult');
      console.log(results);
    }
  };

  return (
    <>
      <h1>Тестирование на 2 гипотезу</h1>
      <p>Вам нужно выбрать как можно больше объектов, которые вы увидели</p>
      <Divider />

      <Flex style={{ margin: '0 auto', display: gameState === 'showElems' ? 'flex' : 'none' }} justify='center'>
        {numbers.map((number, index) => (
          <div key={`${number}-${index}`} style={{ maxWidth: '70px', border: '1px solid gray', borderRadius: '5px', margin: '0.5rem', padding: '1rem' }}>
            {stage === 1 && number}
            {stage === 2 && <Pikto number={number} />}
          </div>
        ))}
      </Flex>

      {gameState === 'selectElems' && (
        <p style={{ alignSelf: 'start', justifySelf: 'center', textAlign: 'center', textDecoration: 'underline' }}>
          Выберите цифры, которые вы увидели
        </p>
      )}
      <Flex style={{ margin: '0 auto', display: gameState === 'selectElems' ? 'flex' : 'none' }} justify='center'>
        {zifri.map((number, index) => (
          <div
            key={`${number}-${index}`}
            style={{
              background: selected.includes(number) ? 'gray' : 'white',
              maxWidth: '70px',
              border: '1px solid gray',
              borderRadius: '5px',
              margin: '0.5rem',
              padding: '1rem',
              cursor: 'pointer',
            }}
            onClick={() => changeSelected(number)}
          >
            {stage === 1 && number}
            {stage === 2 && <Pikto number={number} />}
          </div>
        ))}
      </Flex>

      <ResultsSecondTest gameState={gameState} results={results} />

      {/* Кнопка "Начать" */}
      {gameState === 'waitStart' && (
        <Button onClick={() => setStateShown(1)} type='primary' style={{ background: 'green' }}>
          Начать
        </Button>
      )}

      {/* Кнопка "Выбрать ответ" */}
      {gameState === 'selectElems' && (
        <Button onClick={handleSelectClicked} type='primary' style={{ background: 'red' }}>
          Выбрать ответ
        </Button>
      )}
    </>
  );
}

export default SecondTest;
