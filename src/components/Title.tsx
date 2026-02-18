type Props = {
    title: string
}

const Title = ({title}: Props) => {
  return (
    <h1 className="uppercase font-bold mb-5 mt-5 text-center text-3xl">{title}</h1>
  );
};

export default Title;