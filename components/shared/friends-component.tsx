import { Container, Title } from "@/components/shared";

const FriendsComponent = async () => {
    return (
        <Container className="ml-0 mt-5">
        <div className="w-80">
          <Title text="Friends" size="lg" className="font-extrabold"/>
          <div className="relative flex items-center">
            <div className="mt-3 w-10 h-10 bg-primary rounded-full shrink-0"></div>
            <div className="ml-3 mt-3 flex flex-col">
              <p>
                Friend1
              </p>
            </div>
          </div>
        </div>
      </Container>
    );
};
export default FriendsComponent;