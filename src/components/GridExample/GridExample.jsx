import 'twin.macro';
import { Container } from '../../AppStyles';

const GridExample = () => (
  <div tw="h-screen w-screen bg-slate-100 px-4">
    <h2 tw="text-3xl font-bold">Example 1</h2>
    <Container>
      <div tw="mt-4 grid gap-4 sm:grid-flow-col">
        <div className="box">1</div>
        <div className="box">2</div>
        <div className="box">3</div>
      </div>
    </Container>
    <hr tw="my-10" />
    <h2 tw="text-3xl font-bold">Example 2</h2>
    <Container>
      <div tw="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        <div className="box">1</div>
        <div className="box">2</div>
        <div className="box">3</div>
        <div className="box">4</div>
      </div>
    </Container>
    <hr tw="my-10" />
    <h2 tw="text-3xl font-bold">Example 3</h2>
    <div tw="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-12">
      <div className="box">1</div>
      <div className="box" tw="sm:col-span-2">
        2
      </div>
      <div className="box" tw="md:col-span-3">
        3
      </div>
      <div className="box" tw="sm:col-span-2 md:col-span-6">
        4
      </div>
    </div>
    Another way
    <div tw="mt-4 grid grid-cols-12 gap-4">
      <div className="box" tw="col-span-6 sm:col-span-4 md:col-span-1">
        1
      </div>
      <div className="box col-span-6" tw="sm:col-span-8 md:col-span-2">
        2
      </div>
      <div className="box" tw="col-span-6 sm:col-span-4 md:col-span-3">
        3
      </div>
      <div className="box" tw="col-span-6 sm:col-span-8 md:col-span-6">
        4
      </div>
    </div>
  </div>
);

export default GridExample;
