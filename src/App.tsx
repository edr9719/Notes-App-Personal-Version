import NoteForm from './components/NoteForm';

const App = () => {
  return (
    <div className='max-w-lg mx-auto mt-20 p-10 bg-orange-400 rounded-lg shadow-lg'>
      <div className='flex justify-center items-center'>
        <img src='./public/notes.svg' alt='Notes Icon' width={'100px'} />
        <h1 className='text-5xl font-Barriecito font-bold text-center text-[#0130cb]'>
          Notes App
        </h1>
      </div>
      <NoteForm />
    </div>
  );
};

export default App;
