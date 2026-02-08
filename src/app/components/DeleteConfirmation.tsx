interface DeleteConfirmationProps {
  onConfirm: () => void;
  onCancel: () => void;
}

export function DeleteConfirmation({ onConfirm, onCancel }: DeleteConfirmationProps) {
  return (
    <>
      <div 
        className="fixed inset-0 bg-black opacity-20 z-40"
        onClick={onCancel}
      />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Delete Stack?
          </h3>
          <p className="text-gray-600 mb-6">
            This will permanently delete this stack and all cards in it. This action cannot be undone.
          </p>
          <div className="flex gap-3 justify-end">
            <button
              onClick={onCancel}
              className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors cursor-pointer border-none"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors cursor-pointer border-none"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
