import Card from "./Card";
const Main = () => {
  return (
    <div className="container w-full flex flex-col">
      <section className="">
        <h2 className="text-2xl my-2">New Uploads</h2>
        <img
          src="https://tinyurl.com/mvnamm6s"
          alt=""
          className="w-full h-[350px]"
        />
      </section>
      <section className="my-2">
        <h2 className="text-2xl my-2">Public</h2>
        <div className="grid grid-cols-4 gap-4">
          <Card className="">
            <img
              src="https://tinyurl.com/ued8wzz6"
              alt="image"
              className="w-full"
            />
            <div className="px-3 py-2">
              <h2 className="text-lg">Minimal Photography</h2>
              <div className="text-sm">By Abiola</div>
              <span>6.3K views | 1 hours ago</span>
            </div>
          </Card>
          <Card className="">
            <img
              src="https://tinyurl.com/ued8wzz6"
              alt="image"
              className="w-full"
            />
            <div className="px-3 py-2">
              <h2 className="text-lg">Minimal Photography</h2>
              <div className="text-sm">By Abiola</div>
              <span>6.3K views | 1 hours ago</span>
            </div>
          </Card>
          <Card className="">
            <img
              src="https://tinyurl.com/ued8wzz6"
              alt="image"
              className="w-full"
            />
            <div className="px-3 py-2">
              <h2 className="text-lg">Minimal Photography</h2>
              <div className="text-sm">By Abiola</div>
              <span>6.3K views | 1 hours ago</span>
            </div>
          </Card>
          <Card className="">
            <img
              src="https://tinyurl.com/ued8wzz6"
              alt="image"
              className="w-full"
            />
            <div className="px-3 py-2">
              <h2 className="text-lg">Minimal Photography</h2>
              <div className="text-sm">By Abiola</div>
              <span>6.3K views | 1 hours ago</span>
            </div>
          </Card>
          <Card>Card Two</Card>
          <Card>Card Three</Card>
        </div>
      </section>
    </div>
  );
};

export default Main;
