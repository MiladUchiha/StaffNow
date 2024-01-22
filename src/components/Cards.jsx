'use client'
import { Card, CardBody } from "@nextui-org/react";

const Cards = ({content}) => {
  return (
    <Card isBlurred>
        <CardBody className="text-center text-2xl">
            {content}
        </CardBody>
    </Card>
  )
}

export default Cards