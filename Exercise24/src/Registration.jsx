import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';

const Registration = () => {
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const formData = watch();
  useEffect(() => {
    const savedData = localStorage.getItem('studentFormData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      reset(parsedData);
    }
  }, [reset]);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      localStorage.setItem('studentFormData', JSON.stringify(data));
      
      console.log('Form submitted:', data);
      alert('Registration successful!\n' + JSON.stringify(data, null, 2));
      reset();
      localStorage.removeItem('studentFormData');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    reset();
    localStorage.removeItem('studentFormData');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Student Registration</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Student Name
          </label>
          <input
            {...register('studentName', {
              required: 'Name is required',
              minLength: {
                value: 2,
                message: 'Name must be at least 2 characters'
              }
            })}
            className={`w-full p-2 border rounded transition-colors ${
              errors.studentName
                ? 'border-red-500 bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-400'
                : 'border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-400'
            }`}
          />
          {errors.studentName && (
            <p className="text-red-500 text-sm mt-1 font-medium">
              ✕ {errors.studentName.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Invalid email format'
              }
            })}
            className={`w-full p-2 border rounded transition-colors ${
              errors.email
                ? 'border-red-500 bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-400'
                : 'border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-400'
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1 font-medium">
              ✕ {errors.email.message}
            </p>
          )}
        </div>

        {/* Grade Level */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Grade Level
          </label>
          <select
            {...register('gradeLevel', {
              required: 'Please select a grade'
            })}
            className={`w-full p-2 border rounded transition-colors ${
              errors.gradeLevel
                ? 'border-red-500 bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-400'
                : 'border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-400'
            }`}
          >
            <option value="">Select Grade</option>
            <option value="9">Grade 9</option>
            <option value="10">Grade 10</option>
            <option value="11">Grade 11</option>
            <option value="12">Grade 12</option>
          </select>
          {errors.gradeLevel && (
            <p className="text-red-500 text-sm mt-1 font-medium">
              ✕ {errors.gradeLevel.message}
            </p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">
            Subjects Interest
          </label>
          <div className={`space-y-2 p-3 border rounded transition-colors ${
            errors.subjects
              ? 'border-red-500 bg-red-50'
              : 'border-gray-300'
          }`}>
            <label className="flex items-center">
              <input
                type="checkbox"
                {...register('subjects', {
                  required: 'Select at least one subject'
                })}
                value="math"
                className="mr-2 w-4 h-4 accent-rose-500"
              />
              Mathematics
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                {...register('subjects')}
                value="science"
                className="mr-2 w-4 h-4 accent-rose-500"
              />
              Science
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                {...register('subjects')}
                value="english"
                className="mr-2 w-4 h-4 accent-rose-500"
              />
              English
            </label>
          </div>
          {errors.subjects && (
            <p className="text-red-500 text-sm mt-1 font-medium">
              ✕ {errors.subjects.message}
            </p>
          )}
        </div>
        <div className="flex gap-3 pt-4">
          <button
            type="submit"
            disabled={isLoading}
            className="flex-1 bg-rose-500 text-white py-2 rounded hover:bg-rose-600 disabled:bg-rose-300 disabled:cursor-not-allowed transition-colors font-medium flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <span className="animate-spin">⏳</span>
                Registering...
              </>
            ) : (
              'Register'
            )}
          </button>
          <button
            type="reset"
            onClick={handleReset}
            className="flex-1 bg-gray-300 text-gray-800 py-2 rounded hover:bg-gray-400 transition-colors font-medium"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;