import { Flex } from 'antd'
import React from 'react'
import { MehOutlined } from '@ant-design/icons';


interface PiktoProps{
    number: number
}

function Pikto({ number }: PiktoProps) {
  return (
    <Flex vertical>
        {
            Array.from({length: number}).map((_, index) => (
              <MehOutlined key={index}/>
            ))
        }
    </Flex>
  )
}

export default Pikto