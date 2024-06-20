"use client";
import { useState } from 'react';
import Head from 'next/head';

export default function DataProcessorForm() {
  const [formData, setFormData] = useState({
    entity_name: "",
    nature_of_entity: "",
    entity_sector: "",
    entity_address: "",
    phone_number: "",
    email_address: "",
    dpo_name: "",
    dpo_phone_number: "",
    dpo_email_address: "",
    category_of_data_subjects: "",
    purpose_of_data_processing: "",
    transfer_of_personal_data_outside_rwanda: false,
    transferred_country: "",
    categories_of_personal_data: "",
    sensitive_personal_data: false,
    additional_information: "",
    declaration_name: "",
    declaration_designation: "",
    declaration_date: ""
  });

  const [page, setPage] = useState(1);

  const nextPage = () => setPage(page + 1);
  const prevPage = () => setPage(page - 1);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const requestBody = {
        ...formData,
        representative_name: formData.dpo_name, // Assuming representative details are the same as DPO
        representative_phone_number: formData.dpo_phone_number,
        representative_address: formData.entity_address,
        representative_email: formData.dpo_email_address,
        representative_website: formData.website,
        transfer_country: formData.transferred_country,
        is_approved: 1
      };

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(requestBody),
        redirect: "follow"
      };

      const response = await fetch("http://localhost:5000/api/data/create", requestOptions);

      if (response.ok) {
        console.log("Form submitted successfully");
        // Reset the form or perform any additional actions
        setFormData({
          entity_name: "",
          nature_of_entity: "",
          entity_sector: "",
          entity_address: "",
          phone_number: "",
          email_address: "",
          dpo_name: "",
          dpo_phone_number: "",
          dpo_email_address: "",
          category_of_data_subjects: "",
          purpose_of_data_processing: "",
          transfer_of_personal_data_outside_rwanda: false,
          transferred_country: "",
          categories_of_personal_data: "",
          sensitive_personal_data: false,
          additional_information: "",
          declaration_name: "",
          declaration_designation: "",
          declaration_date: "",
        });
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <Head>
        <title>Request Data Processor Certificate</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>
      <form onSubmit={handleSubmit} className="form space-y-6">
        {page === 1 && (
          <>
            {/* SECTION 1 – APPLICANT DETAILS */}
            <section className="container mx-auto p-4 bg-white rounded-md shadow-md">
              <header className="text-xl font-bold mb-4">SECTION 1 – APPLICANT DETAILS</header>
              <div className="input-box">
                <label>Entity Name</label>
                <input
                  type="text"
                  name="entity_name"
                  value={formData.entity_name}
                  onChange={handleChange}
                  placeholder="Enter entity name"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="column flex space-x-4">
                <div className="input-box flex-1">
                  <label>Registration Number (if applicable)</label>
                  <input
                    type="text"
                    name="registration_number"
                    value={formData.registration_number}
                    onChange={handleChange}
                    placeholder="Enter registration number"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="input-box flex-1">
                  <label>License Number (if applicable)</label>
                  <input
                    type="text"
                    name="license_number"
                    value={formData.license_number}
                    onChange={handleChange}
                    placeholder="Enter license number"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="column flex space-x-4">
                <div className="input-box flex-1">
                  <label>Law No (if applicable)</label>
                  <input
                    type="text"
                    name="law_number"
                    value={formData.law_number}
                    onChange={handleChange}
                    placeholder="Enter law number"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="input-box flex-1">
                  <label>Presidential order No (if applicable)</label>
                  <input
                    type="text"
                    name="presidential_order_number"
                    value={formData.presidential_order_number}
                    onChange={handleChange}
                    placeholder="Enter presidential order number"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="column flex space-x-4">
                <div className="input-box flex-1">
                  <label>Nature of Entity</label>
                  <div className="select-box">
                    <select
                      name="nature_of_entity"
                      value={formData.nature_of_entity}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option hidden>Select an option</option>
                      <option value="Public">Public</option>
                      <option value="Private">Private</option>
                      <option value="NGO">NGO</option>
                      <option value="Faith Based Organization">Faith Based Organization</option>
                      <option value="Political Organization">Political Organization</option>
                      <option value="Development Partner">Development Partner</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="input-box flex-1">
                  <label>Entity Sector</label>
                  <input
                    type="text"
                    name="entity_sector"
                    value={formData.entity_sector}
                    onChange={handleChange}
                    placeholder="Enter entity sector"
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="column flex space-x-4">
                <div className="input-box flex-1">
                  <label>Entity Address</label>
                  <input
                    type="text"
                    name="entity_address"
                    value={formData.entity_address}
                    onChange={handleChange}
                    placeholder="Enter address (Country, Province, District, Sector)"
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="input-box flex-1">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="column flex space-x-4">
                <div className="input-box flex-1">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email_address"
                    value={formData.email_address}
                    onChange={handleChange}
                    placeholder="Enter email address"
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="input-box flex-1">
                  <label>Website</label>
                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="Enter website URL"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </section>
            <div className="flex justify-between mt-4">
              <button type="button" onClick={prevPage} disabled={page === 1} className="px-4 py-2 bg-gray-200 text-gray-600 rounded-md">Previous</button>
              <button type="button" onClick={nextPage} className="px-4 py-2 bg-blue-600 text-white rounded-md">Next</button>
            </div>
          </>
        )}
        {page === 2 && (
          <>
            {/* SECTION 2 – DATA PROTECTION OFFICER OR REPRESENTATIVE */}
            <section className="container mx-auto p-4 bg-white rounded-md shadow-md">
              <header className="text-xl font-bold mb-4">SECTION 2 – DATA PROTECTION OFFICER OR REPRESENTATIVE</header>
              <div className="input-box">
                <label>Data Protection Officer or Representative Name</label>
                <input
                  type="text"
                  name="dpo_name"
                  value={formData.dpo_name}
                  onChange={handleChange}
                  placeholder="Enter DPO or Representative name"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="input-box">
                <label>Data Protection Officer or Representative Phone Number</label>
                <input
                  type="text"
                  name="dpo_phone_number"
                  value={formData.dpo_phone_number}
                  onChange={handleChange}
                  placeholder="Enter DPO or Representative phone number"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="input-box">
                <label>Data Protection Officer or Representative Address</label>
                <input
                  type="text"
                  name="dpo_address"
                  value={formData.dpo_address}
                  onChange={handleChange}
                  placeholder="Enter DPO or Representative address"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="input-box">
                <label>Data Protection Officer or Representative Email</label>
                <input
                  type="email"
                  name="dpo_email_address"
                  value={formData.dpo_email_address}
                  onChange={handleChange}
                  placeholder="Enter DPO or Representative email"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="input-box">
                <label>Data Protection Officer or Representative Website</label>
                <input
                  type="text"
                  name="dpo_website"
                  value={formData.dpo_website}
                  onChange={handleChange}
                  placeholder="Enter DPO or Representative website"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </section>
            <div className="flex justify-between mt-4">
              <button type="button" onClick={prevPage} className="px-4 py-2 bg-gray-200 text-gray-600 rounded-md">Previous</button>
              <button type="button" onClick={nextPage} className="px-4 py-2 bg-blue-600 text-white rounded-md">Next</button>
            </div>
          </>
        )}
        {page === 3 && (
          <>
            {/* SECTION 3 – DATA PROCESSING DETAILS */}
            <section className="container mx-auto p-4 bg-white rounded-md shadow-md">
              <header className="text-xl font-bold mb-4">SECTION 3 – DATA PROCESSING DETAILS</header>
              <div className="input-box">
                <label>Category of Data Subjects</label>
                <input
                  type="text"
                  name="category_of_data_subjects"
                  value={formData.category_of_data_subjects}
                  onChange={handleChange}
                  placeholder="Enter category of data subjects"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="input-box">
                <label>Purpose of Data Processing</label>
                <input
                  type="text"
                  name="purpose_of_data_processing"
                  value={formData.purpose_of_data_processing}
                  onChange={handleChange}
                  placeholder="Enter purpose of data processing"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="input-box">
                <label>Transfer of Personal Data Outside Rwanda</label>
                <input
                  type="checkbox"
                  name="transfer_of_personal_data_outside_rwanda"
                  checked={formData.transfer_of_personal_data_outside_rwanda}
                  onChange={handleChange}
                  className="mr-2 leading-tight"
                />
                <span>Yes</span>
              </div>
              {formData.transfer_of_personal_data_outside_rwanda && (
                <div className="input-box">
                  <label>Transferred Country</label>
                  <input
                    type="text"
                    name="transferred_country"
                    value={formData.transferred_country}
                    onChange={handleChange}
                    placeholder="Enter transferred country"
                    required={formData.transfer_of_personal_data_outside_rwanda}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}
              <div className="input-box">
                <label>Categories of Personal Data</label>
                <input
                  type="text"
                  name="categories_of_personal_data"
                  value={formData.categories_of_personal_data}
                  onChange={handleChange}
                  placeholder="Enter categories of personal data"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="input-box">
                <label>Sensitive Personal Data</label>
                <input
                  type="checkbox"
                  name="sensitive_personal_data"
                  checked={formData.sensitive_personal_data}
                  onChange={handleChange}
                  className="mr-2 leading-tight"
                />
                <span>Yes</span>
              </div>
              <div className="input-box">
                <label>Additional Information</label>
                <textarea
                  name="additional_information"
                  value={formData.additional_information}
                  onChange={handleChange}
                  placeholder="Enter any additional information"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </section>
            <div className="flex justify-between mt-4">
              <button type="button" onClick={prevPage} className="px-4 py-2 bg-gray-200 text-gray-600 rounded-md">Previous</button>
              <button type="button" onClick={nextPage} className="px-4 py-2 bg-blue-600 text-white rounded-md">Next</button>
            </div>
          </>
        )}
        {page === 4 && (
          <>
            {/* SECTION 4 – DECLARATION */}
            <section className="container mx-auto p-4 bg-white rounded-md shadow-md">
              <header className="text-xl font-bold mb-4">SECTION 4 – DECLARATION</header>
              <div className="input-box">
                <label>Name</label>
                <input
                  type="text"
                  name="declaration_name"
                  value={formData.declaration_name}
                  onChange={handleChange}
                  placeholder="Enter name"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="input-box">
                <label>Designation</label>
                <input
                  type="text"
                  name="declaration_designation"
                  value={formData.declaration_designation}
                  onChange={handleChange}
                  placeholder="Enter designation"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="input-box">
                <label>Date</label>
                <input
                  type="date"
                  name="declaration_date"
                  value={formData.declaration_date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </section>
            <div className="flex justify-between mt-4">
              <button type="button" onClick={prevPage} className="px-4 py-2 bg-gray-200 text-gray-600 rounded-md">Previous</button>
              <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded-md">Submit</button>
            </div>
          </>
        )}
      </form>
    </>
  );
}