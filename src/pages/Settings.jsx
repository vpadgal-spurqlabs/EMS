import React, { useState } from 'react';
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';

const Settings = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    preferences: {
      notifications: true,
      emailUpdates: true,
      darkMode: false,
    },
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePreferenceChange = (preference) => {
    setFormData({
      ...formData,
      preferences: {
        ...formData.preferences,
        [preference]: !formData.preferences[preference],
      },
    });
  };

  const handleSaveSettings = (e) => {
    e.preventDefault();
    // Save logic would go here
    setSuccessMessage('Settings saved successfully!');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Settings</h1>

        <Card className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Profile Information</h2>
          
          <form onSubmit={handleSaveSettings} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <Input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
              />
              <Input
                type="text"
                name="department"
                placeholder="Department"
                value={formData.department}
                onChange={handleInputChange}
              />
            </div>

            <div className="border-t pt-6 mt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Preferences</h3>
              
              <div className="space-y-3">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.preferences.notifications}
                    onChange={() => handlePreferenceChange('notifications')}
                    className="w-4 h-4 text-blue-600 rounded"
                  />
                  <span className="text-gray-700">Enable push notifications</span>
                </label>

                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.preferences.emailUpdates}
                    onChange={() => handlePreferenceChange('emailUpdates')}
                    className="w-4 h-4 text-blue-600 rounded"
                  />
                  <span className="text-gray-700">Receive email updates</span>
                </label>

                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.preferences.darkMode}
                    onChange={() => handlePreferenceChange('darkMode')}
                    className="w-4 h-4 text-blue-600 rounded"
                  />
                  <span className="text-gray-700">Dark mode</span>
                </label>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
                Save Settings
              </Button>
              <Button type="button" className="bg-gray-300 hover:bg-gray-400 text-gray-800">
                Cancel
              </Button>
            </div>

            {successMessage && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded text-green-700">
                {successMessage}
              </div>
            )}
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
