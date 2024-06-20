"use client";
import { useState } from 'react';
import Head from 'next/head';
import { toast,ToastContainer } from 'react-toastify';

export default function DataControllerForm() {
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    entity_name: "",
    registration_number: "",
    license_number: "",
    law_number: "",
    presidential_order_number: "",
    nature_of_entity: "",
    entity_sector: "",
    entity_address: "",
    phone_number: "",
    email_address: "",
    website: "",
    dpo_name: "",
    dpo_phone_number: "",
    dpo_email_address: "",
    representative_name: "",
    representative_phone_number: "",
    representative_address: "",
    representative_email: "",
    representative_website: "",
    category_of_data_subjects: "",
    purpose_of_data_processing: "",
    transfer_of_personal_data_outside_rwanda: "",
    transfer_country: "",
    categories_of_personal_data: "",
    sensitive_personal_data: "",
    additional_information: "",
    declaration_name: "",
    declaration_designation: "",
    declaration_date: "",
  });

  const nextPage = () => setPage(page + 1);
  const prevPage = () => setPage(page - 1);

  const progressPercentage = page === 1 ? 33 : page === 2 ? 66 : 100;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      ...formData,
      transfer_of_personal_data_outside_rwanda: formData.transfer_of_personal_data_outside_rwanda === "Yes",
      sensitive_personal_data: formData.sensitive_personal_data === "Yes",
      is_approved: 0
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch("http://localhost:5000/api/data/create", requestOptions);
      const result = await response.json();
      toast.success("Application submittted successfully")
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Head>
        <title>Registration as a Data Processor</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>
      <section className="container mx-auto p-8 bg-gray-100 rounded-md shadow-md max-w-3xl">
        <header className="text-2xl font-bold mb-6 text-center text-dark">Request Data Controller Certificate</header>
        <div className="w-full bg-gray-200 rounded-full h-6 mb-6 relative">
          <div
            className={`h-6 rounded-full bg-blue-500 text-white text-xs font-medium text-center p-0.5 leading-none ${page === 1 ? 'w-1/3' : page === 2 ? 'w-2/3' : 'w-full'}`}
          >
            {progressPercentage}%
          </div>
        </div>
        <form onSubmit={handleSubmit} className="form space-y-6">
          {page === 1 && (
            <>
              <section className="container mx-auto p-4 bg-white rounded-md shadow-md mb-4">
                <header className="text-xl font-bold mb-4 text-dark">SECTION 1 – APPLICANT DETAILS</header>
                <div className="input-box mb-4">
                  <label className="text-dark">Entity Name</label>
                  <input type="text" name="entity_name" value={formData.entity_name} onChange={handleInputChange} placeholder="Enter entity name" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="column flex space-x-4 mb-4">
                  <div className="input-box flex-1">
                    <label className="text-dark">Registration Number (if applicable)</label>
                    <input type="text" name="registration_number" value={formData.registration_number} onChange={handleInputChange} placeholder="Enter registration number" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div className="input-box flex-1">
                    <label className="text-dark">License Number (if applicable)</label>
                    <input type="text" name="license_number" value={formData.license_number} onChange={handleInputChange} placeholder="Enter license number" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>
                <div className="column flex space-x-4 mb-4">
                  <div className="input-box flex-1">
                    <label className="text-dark">Law No (if applicable)</label>
                    <input type="text" name="law_number" value={formData.law_number} onChange={handleInputChange} placeholder="Enter law number" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div className="input-box flex-1">
                    <label className="text-dark">Presidential order No (if applicable)</label>
                    <input type="text" name="presidential_order_number" value={formData.presidential_order_number} onChange={handleInputChange} placeholder="Enter presidential order number" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>
                <div className="column flex space-x-4 mb-4">
                  <div className="input-box flex-1">
                    <label className="text-dark">Nature of Entity</label>
                    <div className="select-box">
                      <select name="nature_of_entity" value={formData.nature_of_entity} onChange={handleInputChange} required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option hidden>Select an option</option>
                        <option>Public</option>
                        <option>Private</option>
                        <option>NGO</option>
                        <option>Faith Based Organization</option>
                        <option>Political Organization</option>
                        <option>Development Partner</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="input-box flex-1">
                    <label className="text-dark">Entity Sector</label>
                    <input type="text" name="entity_sector" value={formData.entity_sector} onChange={handleInputChange} placeholder="Enter entity sector" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>
                <div className="column flex space-x-4 mb-4">
                  <div className="input-box flex-1">
                    <label className="text-dark">Entity Address</label>
                    <input type="text" name="entity_address" value={formData.entity_address} onChange={handleInputChange} placeholder="Enter address (Country, Province, District, Sector)" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div className="input-box flex-1">
                    <label className="text-dark">Phone Number</label>
                    <input type="number" name="phone_number" value={formData.phone_number} onChange={handleInputChange} placeholder="0784562736" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>
                <div className="column flex space-x-4 mb-4">
                  <div className="input-box flex-1">
                    <label className="text-dark">Email Address</label>
                    <input type="email" name="email_address" value={formData.email_address} onChange={handleInputChange} placeholder="your_name@gmail.com" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
                  </div>
                  <div className="input-box flex-1">
                    <label className="text-dark">Website</label>
                    <input type="text" name="website" value={formData.website} onChange={handleInputChange} placeholder="Enter website" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>
              </section>
              <div className="flex justify-between">
                <button type="button" onClick={nextPage} className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none">Next</button>
              </div>
            </>
          )}
          {page === 2 && (
            <>
              <section className="container mx-auto p-4 bg-white rounded-md shadow-md mb-4">
                <header className="text-xl font-bold mb-4 text-dark">SECTION 2 – ENTITY REPRESENTATIVE CONTACT DETAILS</header>
                <div className="input-box mb-4">
                  <label className="text-dark">Data Protection Officer Name (if applicable)</label>
                  <input type="text" name="dpo_name" value={formData.dpo_name} onChange={handleInputChange} placeholder="Enter DPO name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="column flex space-x-4 mb-4">
                  <div className="input-box flex-1">
                    <label className="text-dark">Data Protection Officer Phone Number (if applicable)</label>
                    <input type="text" name="dpo_phone_number" value={formData.dpo_phone_number} onChange={handleInputChange} placeholder="Enter DPO phone number" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div className="input-box flex-1">
                    <label className="text-dark">Data Protection Officer Email Address (if applicable)</label>
                    <input type="email" name="dpo_email_address" value={formData.dpo_email_address} onChange={handleInputChange} placeholder="Enter DPO email address" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>
                <div className="input-box mb-4">
                  <label className="text-dark">Representative Name</label>
                  <input type="text" name="representative_name" value={formData.representative_name} onChange={handleInputChange} placeholder="Enter representative name" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="column flex space-x-4 mb-4">
                  <div className="input-box flex-1">
                    <label className="text-dark">Representative Phone Number</label>
                    <input type="text" name="representative_phone_number" value={formData.representative_phone_number} onChange={handleInputChange} placeholder="Enter representative phone number" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div className="input-box flex-1">
                    <label className="text-dark">Representative Address</label>
                    <input type="text" name="representative_address" value={formData.representative_address} onChange={handleInputChange} placeholder="Enter representative address" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>
                <div className="column flex space-x-4 mb-4">
                  <div className="input-box flex-1">
                    <label className="text-dark">Representative Email</label>
                    <input type="email" name="representative_email" value={formData.representative_email} onChange={handleInputChange} placeholder="Enter representative email" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div className="input-box flex-1">
                    <label className="text-dark">Representative Website</label>
                    <input type="text" name="representative_website" value={formData.representative_website} onChange={handleInputChange} placeholder="Enter representative website" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>
              </section>
              <div className="flex justify-between">
                <button type="button" onClick={prevPage} className="px-4 py-2 bg-gray-500 text-white rounded-md shadow-md hover:bg-gray-600 focus:outline-none">Previous</button>
                <button type="button" onClick={nextPage} className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none">Next</button>
              </div>
            </>
          )}
          {page === 3 && (
            <>
              <section className="container mx-auto p-4 bg-white rounded-md shadow-md mb-4">
                <header className="text-xl font-bold mb-4 text-dark">SECTION 3 – PROCESSING ACTIVITIES AND DECLARATION</header>
                <div className="input-box mb-4">
                  <label className="text-dark">Categories of Data Subjects</label>
                  <input type="text" name="category_of_data_subjects" value={formData.category_of_data_subjects} onChange={handleInputChange} placeholder="Enter categories of data subjects" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="input-box mb-4">
                  <label className="text-dark">Purpose of Data Processing</label>
                  <textarea name="purpose_of_data_processing" value={formData.purpose_of_data_processing} onChange={handleInputChange} placeholder="Enter purpose of data processing" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                </div>
                <div className="input-box mb-4">
                  <label className="text-dark">Will personal data be transferred outside Rwanda?</label>
                  <div className="select-box">
                    <select name="transfer_of_personal_data_outside_rwanda" value={formData.transfer_of_personal_data_outside_rwanda} onChange={handleInputChange} required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option hidden>Select an option</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>
                {formData.transfer_of_personal_data_outside_rwanda === "Yes" && (
                  <div className="input-box mb-4">
                    <label className="text-dark">Country to which data will be transferred</label>
                    <input type="text" name="transfer_country" value={formData.transfer_country} onChange={handleInputChange} placeholder="Enter country" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                )}
                <div className="input-box mb-4">
                  <label className="text-dark">Categories of Personal Data</label>
                  <textarea name="categories_of_personal_data" value={formData.categories_of_personal_data} onChange={handleInputChange} placeholder="Enter categories of personal data" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                </div>
                <div className="input-box mb-4">
                  <label className="text-dark">Will sensitive personal data be processed?</label>
                  <div className="select-box">
                    <select name="sensitive_personal_data" value={formData.sensitive_personal_data} onChange={handleInputChange} required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option hidden>Select an option</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>
                <div className="input-box mb-4">
                  <label className="text-dark">Additional Information (if applicable)</label>
                  <textarea name="additional_information" value={formData.additional_information} onChange={handleInputChange} placeholder="Enter additional information" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                </div>
                <header className="text-xl font-bold mb-4 text-dark">DECLARATION</header>
                <div className="input-box mb-4">
                  <label className="text-dark">Name</label>
                  <input type="text" name="declaration_name" value={formData.declaration_name} onChange={handleInputChange} placeholder="Enter your name" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="input-box mb-4">
                  <label className="text-dark">Position</label>
                  <input type="text" name="declaration_designation" value={formData.declaration_designation} onChange={handleInputChange} placeholder="Enter your position" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="input-box mb-4">
                  <label className="text-dark">Date</label>
                  <input type="date" name="declaration_date" value={formData.declaration_date} onChange={handleInputChange} required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </section>
              <div className="flex justify-between">
                <button type="button" onClick={prevPage} className="px-4 py-2 bg-gray-500 text-white rounded-md shadow-md hover:bg-gray-600 focus:outline-none">Previous</button>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none">Submit</button>
              </div>
            </>
          )}
        </form>
      </section>
      </>
  );
};

