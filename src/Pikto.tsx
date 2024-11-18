// import React from 'react';
import { Flex } from "antd";
import { StarOutlined } from "@ant-design/icons";

interface PiktoProps {
  number: number;
}

function Pikto({ number }: PiktoProps) {
  const renderSmiles = () => {
    switch (number) {
      case 1:
      case 2:
        // Один ряд
        return (
          <Flex>
            {Array.from({ length: number }).map((_, index) => (
              <StarOutlined key={index} />
            ))}
          </Flex>
        );

      case 3:
        // Треугольник
        return (
          <Flex vertical>
            <Flex justify="center">
              <StarOutlined />
            </Flex>
            <Flex justify="space-between">
              <StarOutlined />
              <StarOutlined />
            </Flex>
          </Flex>
        );

      case 4:
        // Квадрат
        return (
          <Flex vertical>
            <Flex>
              <StarOutlined />
              <StarOutlined />
            </Flex>
            <Flex>
              <StarOutlined />
              <StarOutlined />
            </Flex>
          </Flex>
        );

      case 5:
        // Квадрат с точкой посередине
        return (
          <Flex vertical>
            <Flex>
              <StarOutlined />
              <StarOutlined />
            </Flex>
            <Flex justify="center">
              <StarOutlined />
            </Flex>
            <Flex>
              <StarOutlined />
              <StarOutlined />
            </Flex>
          </Flex>
        );

      case 6:
        // 2 ряда по 3 смайла
        return (
          <Flex vertical>
            <Flex>
              {Array.from({ length: 3 }).map((_, index) => (
                <StarOutlined key={index} />
              ))}
            </Flex>
            <Flex>
              {Array.from({ length: 3 }).map((_, index) => (
                <StarOutlined key={index} />
              ))}
            </Flex>
          </Flex>
        );

      case 7:
        // Сверху 2, в середине 3, снизу 2
        return (
          <Flex vertical>
            <Flex justify="center">
              <StarOutlined />
              <StarOutlined />
            </Flex>
            <Flex justify="space-between">
              <StarOutlined />
              <StarOutlined />
              <StarOutlined />
            </Flex>
            <Flex justify="center">
              <StarOutlined />
              <StarOutlined />
            </Flex>
          </Flex>
        );

      case 8:
        // 4 ряда по 2 смайла
        return (
          <Flex vertical>
            {Array.from({ length: 4 }).map((_, index) => (
              <Flex key={index}>
                <StarOutlined />
                <StarOutlined />
              </Flex>
            ))}
          </Flex>
        );

      case 9:
        // 3 ряда по 3 смайла
        return (
          <Flex vertical>
            {Array.from({ length: 3 }).map((_, index) => (
              <Flex key={index}>
                <StarOutlined />
                <StarOutlined />
                <StarOutlined />
              </Flex>
            ))}
          </Flex>
        );

      default:
        return null;
    }
  };

  return <>{renderSmiles()}</>;
}

export default Pikto;
