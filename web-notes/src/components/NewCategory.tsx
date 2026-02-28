import type { NewCategoryProps } from './types/types';

const NewCategory = ({
  newCategory,
  setNewCategory,
  addNewCategory,
  setShowAddCategory,
}: NewCategoryProps) => {
  return (
    <div className='w-4/12 bg-amber-400 absolute flex flex-col justify-center items-center p-10 rounded-lg left-160 top-50 border-5 border-[#0130cb]'>
      <label htmlFor='newCategory' className='text-3xl text-green-600 mb-4'>
        New Category
      </label>
      <input
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
        type='text'
        className='w-xl border border-gray-300 rounded p-2 mt-1 bg-white mb-5'
      />
      <div className='flex gap-10'>
        <button
          onClick={addNewCategory}
          className='cursor-pointer w-10/12 mx-2xl px-6 rounded-lg p-2 text-white font-Barriecito bg-[#0130cb] hover:bg-[#2851d8]'
        >
          Add
        </button>
        <button
          onClick={() => setShowAddCategory(!setShowAddCategory)}
          className='w-10/12 px-4 rounded-lg p-2 text-white font-Barriecito bg-[#0130cb] cursor-pointer hover:bg-[#2851d8]'
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default NewCategory;
