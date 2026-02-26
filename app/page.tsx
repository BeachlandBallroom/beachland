import Image from "next/image";
import { Container, Title } from "@/components/shared";

export default function Home() {
  return <>
    <Container className="mt-5">
      <Title text="Все посты" size="lg" className="font-extrabold`"/>
    </Container>
  </>;
}
