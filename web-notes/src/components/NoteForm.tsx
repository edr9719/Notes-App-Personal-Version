import { useState } from 'react';
import NewCategory from './NewCategory';

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

  return (
    <form className='mt-10 text-center'>
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
      <div className='flex items-center justify-center relative'>
        <label htmlFor='category' className='text-4xl text-green-600 mr-5'>
          Category
        </label>
        <img
          onClick={() => setShowAddCategory(true)}
          src='./public/plus.svg'
          alt='Add Note'
          width={'40px'}
          className='rounded-sm absolute right-8 cursor-pointer hover:shadow-[5px_5px_15px_5px_#915523]'
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
