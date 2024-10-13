import './App.css';

const App = () => {
  const message = `Hello, world! ${process.env.API_URL ?? 'undefined'}`; 

  return (
    <>
      <div className='container'> 
        <div className='row'> 
          <div className='col'> 
            <h3 className='m-3'>{message}</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
