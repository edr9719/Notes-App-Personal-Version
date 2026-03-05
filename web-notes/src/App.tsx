import NoteForm from './components/NoteForm';

const App = () => {
  return (
    <div className='border-royal-blue border-5 max-w-lg mx-auto mt-5 p-10 bg-orange-400 rounded-lg shadow-lg'>
      <div className='flex justify-center items-center'>
        <img src='./public/notes.svg' alt='Notes Icon' width={'100px'} />
        <h1 className='text-5xl font-Barriecito font-bold text-center text-royal-blue'>
          Notes App
        </h1>
      </div>
      <NoteForm />
    </div>
  );
};

export default App;
