import parse, {domToReact} from 'html-react-parser';

const Info = ({name,desc}) => {

    const options = {
        replace: ({ name, children }) => {

          if (name === 'h3') {
            return <h3 className='text-xl font-medium pb-4'>{domToReact(children)}</h3>;
          }
      
          if (name === 'p') {
            return (
              <p className='text-lg font-light pb-4 text-justify'>
                {domToReact(children)}
              </p>
            );
          }
        }
      };


  const description = parse(desc,options)

  return (
    <div className="p-6">
      <p className="text-blue-600 font-semibold text-2xl pb-4">
        What is {name}?
      </p>
     {description}
    </div>
  );
};

export default Info;
