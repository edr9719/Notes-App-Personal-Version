import { useState } from 'react';
import NewCategory from './NewCategory';
import Button from './Button';

const NoteForm = () => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [categories, setCategories] = useState(['Personal', 'Work', 'School']);
  const [category, setCategory] = useState('Personal');
  const [description, setDescription] = useState('');
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [newCategory, setNewCategory] = useState('');

  const addNewCategory = () => {
    const trimmed = newCategory.trim();
    if (trimmed && !categories.includes(trimmed)) {
      setCategories([...categories, trimmed]);
      setCategory(trimmed);
    }
    setNewCategory('');
    setShowAddCategory(false);
  };

  let formInputs = true;

  if (!title && !description) {
    formInputs = false;
  }

  return (
    <form className='mt-2 text-center'>
      {/*_____Title_______*/}
      <label htmlFor='title' className='text-4xl text-green-600'>
        Title
      </label>
      <input
        type='text'
        id='title'
        className='w-full border border-gray-300 rounded p-2 mt-1 bg-white mb-5'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {/*_____Category_______*/}

      <div className='flex items-center justify-center relative'>
        <label htmlFor='category' className='text-4xl text-green-600 mr-5'>
          Category
        </label>
        <img
          onClick={() => setShowAddCategory(true)}
          src='./public/plus.svg'
          alt='Add Note'
          width={'40px'}
          className='rounded-sm absolute right-8 cursor-pointer hover:scale-130'
        />
      </div>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        name='category'
        id='category'
        className='mt-2 font-Pacifico w-full border border-gray-300 rounded p-2 mt-1 bg-white mb-5'
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {/*_____Priority_______*/}
      <label htmlFor='priority' className='text-4xl text-green-600 mr-5'>
        Priority
      </label>
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        name='priority'
        id='priority'
        className='font-Pacifico w-full border border-gray-300 rounded p-2 mt-1 bg-white mb-5'
      >
        <option value='low'>Low</option>
        <option value='medium'>Medium</option>
        <option value='high'>High</option>
      </select>

      {/*_____Description_______*/}

      <label htmlFor='description' className='text-4xl text-green-600'>
        Description
      </label>
      <textarea
        id='description'
        className='w-full border border-gray-300 rounded mt-1 h-25 bg-white mb-5'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      {/*_____Buttons_______*/}
      <div className='flex items-center justify-center gap-5 mt-5'>
        <Button label='See notes' styles='bg-royal-blue text-white w-full' />
        <Button
          label='Add note'
          disabled={formInputs ? false : true}
          styles={`${!formInputs ? 'cursor-pointer' : 'cursor-not-allowed'} bg-green-600 text-royal-blue w-full`}
        />
      </div>

      {/*_____Add Category_______*/}

      {showAddCategory && (
        <NewCategory
          newCategory={newCategory}
          setNewCategory={setNewCategory}
          addNewCategory={addNewCategory}
          setShowAddCategory={setShowAddCategory}
        />
      )}
    </form>
  );
};

export default NoteForm;
