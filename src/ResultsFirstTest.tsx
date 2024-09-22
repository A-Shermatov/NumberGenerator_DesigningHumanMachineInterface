import React from 'react'
import Results from './ResultsInterface';
import { Divider, Flex } from 'antd';

interface ResultsProps{
    results: Results;
    gameState: 'waitStart' | 'showElems' | 'selectElems' | 'PrintResult'
}

function ResultsZifras({results, gameState}: ResultsProps) {
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
      </Flex>
  )
}

export default ResultsZifras