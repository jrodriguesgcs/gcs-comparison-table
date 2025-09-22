import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const ProgramComparisonTable = () => {
  // Country flags mapping
  const countryFlags = {
    "Antigua & Barbuda CBI": "🇦🇬",
    "Cyprus Golden Visa": "🇨🇾",
    "Dominica CBI": "🇩🇲",
    "Greece Golden Visa": "🇬🇷",
    "Greece Digital Nomad Visa": "🇬🇷",
    "Grenada CBI": "🇬🇩",
    "Hungary Golden Visa": "🇭🇺",
    "Ireland Start-Up Entrepreneur Programme (STEP) visa": "🇮🇪",
    "Italy Elective Residency Visa": "🇮🇹",
    "Italy Digital Nomad Visa": "🇮🇹",
    "Italy Golden Visa": "🇮🇹",
    "Latvia Golden Visa": "🇱🇻",
    "Malta Permanent Residence Program": "🇲🇹",
    "Malta CES": "🇲🇹",
    "Malta Digital Nomad Visa": "🇲🇹",
    "Malta Retirement Programme": "🇲🇹",
    "Malta Global Residence Programme": "🇲🇹",
    "Portugal Golden Visa": "🇵🇹",
    "Portugal D7 Visa": "🇵🇹",
    "Spain Citizenship by Descent": "🇪🇸"
  };

  // Complete program data from Excel
  const programsData = {
    "Antigua & Barbuda CBI": {
      "PHYSICAL PRESENCE REQUIRED TO MAINTAIN STATUS": "5 days in total in the first 5 years",
      "TIME TO PERMANENT RESIDENCY": "0",
      "Time to Citizenship / Pathway to Citizenship": "4-6 months",
      "PROCESSING PERIOD FROM SUBMISSION": "3-6 months",
      "VISIT THE COUNTRY FOR BIOMETRICS": "No",
      "Number of visa-free countries accessible": "150",
      "Visa-free access to the Schengen area": "Yes",
      "Visa-free access to the United States": "No",
      "Visa-free access to the UK": "Yes",
      "Visa-free access to Russia": "Yes",
      "Visa-free access to China": "Yes",
      "Family Members who can be included in application": "Spouse, children under 30, parents/grandparents over 55, siblings over 18",
      "Inclusion of new family members possible": "Yes",
      "Transfer by inheritance": "No",
      "Right of residence, study and work in the country": "No",
      "Right to work": "Yes",
      "Recognition of second citizenship by the state": "N/A",
      "Program Benefits": "Best for families of 4 and above. Most inclusion of family members. Long standing political stability. Low Tax System. Process entirely remote.",
      "Top 10 Countries - Demand-side": "China, India, USA, Canada, Australia, Nigeria, South Africa",
      "Minimum Investment Required": "USD 230,000",
      "Investment options": "4 options available",
      "Starting Cost for 1 person Before fees": "USD 230,000",
      "Cost for family of four": "USD 230,000",
      "Minimum holding period": "N/A",
      "Investment refundable": "No",
      "Additional requirements": "USD 20,000 processing fee, due diligence fees",
      "Type of document": "Passport and Citizenship certificate",
      "Document Validity period": "5 years",
      "Tax System": "Zero tax/Tax haven",
      "Personal Tax": "0%",
      "Corporate": "0% for international businesses",
      "Capital Gains": "0%",
      "Special Tax Regime": "Yes",
      "Details of Special Tax Regime": "20K USD in Flat Tax, Proof of 100K USD in annual income, 30 days in island",
      "Tax Treaty with the United States": "No",
      "Physical Residency Requirement": "183 days or 30 days",
      "Additional Requirements": "Yes, if 30 days option"
    },
    "Cyprus Golden Visa": {
      "PHYSICAL PRESENCE REQUIRED TO MAINTAIN STATUS": "Visit island once every two years",
      "TIME TO PERMANENT RESIDENCY": "0",
      "Time to Citizenship / Pathway to Citizenship": "7 years (or 3 if you know the language)",
      "PROCESSING PERIOD FROM SUBMISSION": "3 months",
      "VISIT THE COUNTRY FOR BIOMETRICS": "Yes",
      "Number of visa-free countries accessible": "0",
      "Visa-free access to the Schengen area": "No",
      "Visa-free access to the United States": "No",
      "Visa-free access to the UK": "No",
      "Visa-free access to Russia": "No",
      "Visa-free access to China": "No",
      "Family Members who can be included in application": "Spouse, children under 25 (financially dependent + student)",
      "Inclusion of new family members possible": "Yes",
      "Transfer by inheritance": "N/A",
      "Right of residence, study and work in the country": "Yes",
      "Right to work": "Limited",
      "Recognition of second citizenship by the state": "Yes",
      "Program Benefits": "Looking for investment in Real Estate, Tax advantages, Plan B with no stay requirements",
      "Top 10 Countries - Demand-side": "China, Russia, Lebanon, Egypt, India, Syria, Jordan, Turkey, UAE, Nigeria, South Africa",
      "Minimum Investment Required": "€300,000",
      "Investment options": "3 options available",
      "Starting Cost for 1 person Before fees": "€300,000",
      "Cost for family of four": "€300,000",
      "Minimum holding period": "5 years",
      "Investment refundable": "Investment must be sold in general market after obtaining a passport",
      "Additional requirements": "Proof of income of EUR 50,000 + EUR 15,000 for spouse + EUR 10,000 for each child",
      "Type of document": "Permanent Residence Permit",
      "Document Validity period": "10 years, renewable",
      "Tax System": "Worldwide",
      "Personal Tax": "Up to 35%",
      "Corporate": "12.50%",
      "Capital Gains": "20%",
      "Special Tax Regime": "Yes",
      "Details of Special Tax Regime": "Duration for 17 years, First EUR 19,500/yr of salary is exempt",
      "Tax Treaty with the United States": "Yes",
      "Physical Residency Requirement": "183 days or 60 days under non-domiciled regime",
      "Additional Requirements": "Yes"
    },
    "Dominica CBI": {
      "PHYSICAL PRESENCE REQUIRED TO MAINTAIN STATUS": "0",
      "TIME TO PERMANENT RESIDENCY": "0",
      "Time to Citizenship / Pathway to Citizenship": "6-7 months",
      "PROCESSING PERIOD FROM SUBMISSION": "6-8 months",
      "VISIT THE COUNTRY FOR BIOMETRICS": "No",
      "Number of visa-free countries accessible": "142",
      "Visa-free access to the Schengen area": "Yes",
      "Visa-free access to the United States": "No",
      "Visa-free access to the UK": "No",
      "Visa-free access to Russia": "Yes",
      "Visa-free access to China": "Yes",
      "Family Members who can be included in application": "Spouse, children under 30, parents/grandparents over 65",
      "Inclusion of new family members possible": "Yes",
      "Transfer by inheritance": "No",
      "Right of residence, study and work in the country": "No",
      "Right to work": "Yes",
      "Recognition of second citizenship by the state": "Yes",
      "Program Benefits": "Cheapest for single applicant. Island is eco friendly. Process entirely remote.",
      "Top 10 Countries - Demand-side": "China, India, USA, Canada, Australia, Nigeria, South Africa",
      "Minimum Investment Required": "USD 200,000",
      "Investment options": "2 options available",
      "Starting Cost for 1 person Before fees": "USD 200,000",
      "Cost for family of four": "USD 200,000",
      "Minimum holding period": "N/A",
      "Investment refundable": "No",
      "Additional requirements": "Due diligence fees",
      "Type of document": "Passport and Citizenship certificate",
      "Document Validity period": "10 years",
      "Tax System": "Territorial tax system",
      "Personal Tax": "0-35%",
      "Corporate": "25%",
      "Capital Gains": "0%",
      "Special Tax Regime": "No",
      "Details of Special Tax Regime": "No",
      "Tax Treaty with the United States": "No",
      "Physical Residency Requirement": "183 days or more",
      "Additional Requirements": "No"
    },
    "Greece Golden Visa": {
      "PHYSICAL PRESENCE REQUIRED TO MAINTAIN STATUS": "0",
      "TIME TO PERMANENT RESIDENCY": "0",
      "Time to Citizenship / Pathway to Citizenship": "7 years",
      "PROCESSING PERIOD FROM SUBMISSION": "8 months",
      "VISIT THE COUNTRY FOR BIOMETRICS": "Yes",
      "Number of visa-free countries accessible": "29",
      "Visa-free access to the Schengen area": "Yes",
      "Visa-free access to the United States": "No",
      "Visa-free access to the UK": "No",
      "Visa-free access to Russia": "No",
      "Visa-free access to China": "No",
      "Family Members who can be included in application": "Spouse, children under 21, parents of applicant/spouse",
      "Inclusion of new family members possible": "Yes",
      "Transfer by inheritance": "N/A",
      "Right of residence, study and work in the country": "Yes",
      "Right to work": "No",
      "Recognition of second citizenship by the state": "Yes",
      "Program Benefits": "Looking for cheaper real estate. Plan B with minimal residency. Want to live in Greece.",
      "Top 10 Countries - Demand-side": "China, India, Turkey, USA, Lebanon, Egypt, Iran, South Africa, Canada",
      "Minimum Investment Required": "€250,000",
      "Investment options": "7 options available",
      "Starting Cost for 1 person Before fees": "€250,000",
      "Cost for family of four": "€250,000",
      "Minimum holding period": "5 years",
      "Investment refundable": "Investment must be sold after obtaining passport",
      "Additional requirements": "Government fees",
      "Type of document": "Permanent Residence Permit",
      "Document Validity period": "5 years, renewable",
      "Tax System": "Worldwide",
      "Personal Tax": "Up to 44%",
      "Corporate": "22%",
      "Capital Gains": "15%",
      "Special Tax Regime": "Yes; Flat tax and Foreign Pensioner Program",
      "Details of Special Tax Regime": "Flat tax: EUR 100,000/yr for 15 years. Pensioner: 7% flat tax on pensions for 15 years",
      "Tax Treaty with the United States": "Yes",
      "Physical Residency Requirement": "183 days or 0 under flat tax regime",
      "Additional Requirements": "Yes, flat tax on EUR 100,000/yr"
    },
    "Greece Digital Nomad Visa": {
      "PHYSICAL PRESENCE REQUIRED TO MAINTAIN STATUS": "183",
      "TIME TO PERMANENT RESIDENCY": "5",
      "Time to Citizenship / Pathway to Citizenship": "7",
      "PROCESSING PERIOD FROM SUBMISSION": "3-6 months",
      "VISIT THE COUNTRY FOR BIOMETRICS": "Yes",
      "Number of visa-free countries accessible": "29",
      "Visa-free access to the Schengen area": "Yes",
      "Visa-free access to the United States": "No",
      "Visa-free access to the UK": "No",
      "Visa-free access to Russia": "No",
      "Visa-free access to China": "No",
      "Family Members who can be included in application": "Spouse, children under 21, parents",
      "Inclusion of new family members possible": "Yes",
      "Transfer by inheritance": "N/A",
      "Right of residence, study and work in the country": "Residence, not work",
      "Right to work": "No",
      "Recognition of second citizenship by the state": "Yes",
      "Program Benefits": "Visa free access to Schengen, Family reunification, Path to citizenship",
      "Top 10 Countries - Demand-side": "China, India, Turkey, USA, Lebanon, Egypt, Iran, South Africa, Canada",
      "Minimum Investment Required": "N/A",
      "Investment options": "N/A",
      "Starting Cost for 1 person Before fees": "N/A",
      "Cost for family of four": "N/A",
      "Minimum holding period": "N/A",
      "Investment refundable": "N/A",
      "Additional requirements": "Government fees",
      "Type of document": "Temporary Residence Permit",
      "Document Validity period": "2 years, renewable",
      "Tax System": "Worldwide",
      "Personal Tax": "Up to 44%",
      "Corporate": "22%",
      "Capital Gains": "15%",
      "Special Tax Regime": "Yes",
      "Details of Special Tax Regime": "Same as Greece Golden Visa",
      "Tax Treaty with the United States": "Yes",
      "Physical Residency Requirement": "183 days or 0 under flat tax regime",
      "Additional Requirements": "Yes, flat tax of €100,000/yr"
    },
    "Grenada CBI": {
      "PHYSICAL PRESENCE REQUIRED TO MAINTAIN STATUS": "0",
      "TIME TO PERMANENT RESIDENCY": "0",
      "Time to Citizenship / Pathway to Citizenship": "6-7 months",
      "PROCESSING PERIOD FROM SUBMISSION": "6 months",
      "VISIT THE COUNTRY FOR BIOMETRICS": "No",
      "Number of visa-free countries accessible": "148",
      "Visa-free access to the Schengen area": "Yes",
      "Visa-free access to the United States": "E2 after 3 years domicile",
      "Visa-free access to the UK": "Yes",
      "Visa-free access to Russia": "Yes",
      "Visa-free access to China": "Yes",
      "Family Members who can be included in application": "Spouse, children under 30, parents over 55, siblings over 18",
      "Inclusion of new family members possible": "Yes",
      "Transfer by inheritance": "No",
      "Right of residence, study and work in the country": "No",
      "Right to work": "Yes",
      "Recognition of second citizenship by the state": "Yes",
      "Program Benefits": "Possible E2 visa if domicile for 3 years. Process entirely remote.",
      "Top 10 Countries - Demand-side": "China, India, USA, Canada, Australia, Nigeria, South Africa",
      "Minimum Investment Required": "USD 235,000",
      "Investment options": "2 options available",
      "Starting Cost for 1 person Before fees": "USD 235,000",
      "Cost for family of four": "USD 235,000",
      "Minimum holding period": "N/A",
      "Investment refundable": "No",
      "Additional requirements": "Due diligence fees",
      "Type of document": "Passport and Citizenship certificate",
      "Document Validity period": "5 years",
      "Tax System": "Territorial tax system",
      "Personal Tax": "10-30%",
      "Corporate": "28%",
      "Capital Gains": "0%",
      "Special Tax Regime": "No",
      "Details of Special Tax Regime": "No",
      "Tax Treaty with the United States": "No",
      "Physical Residency Requirement": "183 days or more",
      "Additional Requirements": "No"
    },
    "Hungary Golden Visa": {
      "PHYSICAL PRESENCE REQUIRED TO MAINTAIN STATUS": "0",
      "TIME TO PERMANENT RESIDENCY": "3",
      "Time to Citizenship / Pathway to Citizenship": "8 years",
      "PROCESSING PERIOD FROM SUBMISSION": "2-6 months",
      "VISIT THE COUNTRY FOR BIOMETRICS": "Yes",
      "Number of visa-free countries accessible": "29",
      "Visa-free access to the Schengen area": "Yes",
      "Visa-free access to the United States": "No",
      "Visa-free access to the UK": "No",
      "Visa-free access to Russia": "No",
      "Visa-free access to China": "No",
      "Family Members who can be included in application": "Spouse, dependent children, dependent parents",
      "Inclusion of new family members possible": "Yes",
      "Transfer by inheritance": "Yes",
      "Right of residence, study and work in the country": "Yes",
      "Right to work": "Yes",
      "Recognition of second citizenship by the state": "Yes",
      "Program Benefits": "Plan B with minimal stay requirements, Fast EU residence",
      "Top 10 Countries - Demand-side": "USA, Russia, China, Turkey, India, Vietnam, South Africa",
      "Minimum Investment Required": "€250,000",
      "Investment options": "3 options available",
      "Starting Cost for 1 person Before fees": "€250,000",
      "Cost for family of four": "€250,000",
      "Minimum holding period": "5 years",
      "Investment refundable": "Yes",
      "Additional requirements": "No",
      "Type of document": "Temporary Residence Permit",
      "Document Validity period": "10 years, renewable",
      "Tax System": "Worldwide",
      "Personal Tax": "15%",
      "Corporate": "9%",
      "Capital Gains": "9-15%",
      "Special Tax Regime": "No",
      "Details of Special Tax Regime": "N/A",
      "Tax Treaty with the United States": "No",
      "Physical Residency Requirement": "183 days or more",
      "Additional Requirements": "No"
    },
    "Ireland Start-Up Entrepreneur Programme (STEP) visa": {
      "PHYSICAL PRESENCE REQUIRED TO MAINTAIN STATUS": "180",
      "TIME TO PERMANENT RESIDENCY": "5",
      "Time to Citizenship / Pathway to Citizenship": "5",
      "PROCESSING PERIOD FROM SUBMISSION": "15 working days",
      "VISIT THE COUNTRY FOR BIOMETRICS": "No",
      "Number of visa-free countries accessible": "1",
      "Visa-free access to the Schengen area": "No",
      "Visa-free access to the United States": "No",
      "Visa-free access to the UK": "Yes",
      "Visa-free access to Russia": "No",
      "Visa-free access to China": "No",
      "Family Members who can be included in application": "Spouse/Partner/Children under 18",
      "Inclusion of new family members possible": "Yes",
      "Transfer by inheritance": "No",
      "Right of residence, study and work in the country": "Yes",
      "Right to work": "Yes",
      "Recognition of second citizenship by the state": "Yes",
      "Program Benefits": "Family inclusion, Access to EU markets, Path to Irish citizenship",
      "Top 10 Countries - Demand-side": "India, China, US, Nigeria",
      "Minimum Investment Required": "€50,000",
      "Investment options": "1 option available",
      "Starting Cost for 1 person Before fees": "€650-€1000",
      "Cost for family of four": "€2,500-€3,000",
      "Minimum holding period": "0",
      "Investment refundable": "N/A",
      "Additional requirements": "Government fees",
      "Type of document": "Temporary visa",
      "Document Validity period": "2 years",
      "Tax System": "Worldwide tax system",
      "Personal Tax": "Up to 40%",
      "Corporate": "12.5% standard",
      "Capital Gains": "33%",
      "Special Tax Regime": "R&D Special Regimes / Non-Dom",
      "Details of Special Tax Regime": "Various options including SARP and Non-domicile regime",
      "Tax Treaty with the United States": "Yes",
      "Physical Residency Requirement": "No strict requirement",
      "Additional Requirements": "No"
    },
    "Italy Elective Residency Visa": {
      "PHYSICAL PRESENCE REQUIRED TO MAINTAIN STATUS": "183+ days",
      "TIME TO PERMANENT RESIDENCY": "5",
      "Time to Citizenship / Pathway to Citizenship": "10 years",
      "PROCESSING PERIOD FROM SUBMISSION": "2-3 months",
      "VISIT THE COUNTRY FOR BIOMETRICS": "Yes",
      "Number of visa-free countries accessible": "29",
      "Visa-free access to the Schengen area": "Yes",
      "Visa-free access to the United States": "No",
      "Visa-free access to the UK": "No",
      "Visa-free access to Russia": "No",
      "Visa-free access to China": "No",
      "Family Members who can be included in application": "Spouse, children under 18 or dependent",
      "Inclusion of new family members possible": "Yes",
      "Transfer by inheritance": "Yes",
      "Right of residence, study and work in the country": "Yes to residence and study, no to work",
      "Right to work": "No",
      "Recognition of second citizenship by the state": "Yes",
      "Program Benefits": "Special tax regime, No investment needed, Free healthcare, Schengen travel",
      "Top 10 Countries - Demand-side": "USA, China, India, Brazil, UK, Turkey, South Africa, Canada, Nigeria",
      "Minimum Investment Required": "N/A",
      "Investment options": "N/A",
      "Starting Cost for 1 person Before fees": "€32,000 passive income",
      "Cost for family of four": "€41,200-€51,000 passive income",
      "Minimum holding period": "During residence permit",
      "Investment refundable": "N/A",
      "Additional requirements": "Government fees",
      "Type of document": "Temporary Residence Permit",
      "Document Validity period": "1 year, renewable",
      "Tax System": "Worldwide",
      "Personal Tax": "Up to 43%",
      "Corporate": "27.50%",
      "Capital Gains": "26%",
      "Special Tax Regime": "Yes",
      "Details of Special Tax Regime": "Flat Tax €200K/year, Impatriati Regime, Southern Italy Flat Tax",
      "Tax Treaty with the United States": "Yes",
      "Physical Residency Requirement": "183 days or more",
      "Additional Requirements": "No"
    },
    "Italy Digital Nomad Visa": {
      "PHYSICAL PRESENCE REQUIRED TO MAINTAIN STATUS": "183+ days",
      "TIME TO PERMANENT RESIDENCY": "5",
      "Time to Citizenship / Pathway to Citizenship": "10 years",
      "PROCESSING PERIOD FROM SUBMISSION": "1-3 months",
      "VISIT THE COUNTRY FOR BIOMETRICS": "Yes",
      "Number of visa-free countries accessible": "29",
      "Visa-free access to the Schengen area": "Yes",
      "Visa-free access to the United States": "No",
      "Visa-free access to the UK": "No",
      "Visa-free access to Russia": "No",
      "Visa-free access to China": "No",
      "Family Members who can be included in application": "Spouse, children under 18",
      "Inclusion of new family members possible": "Yes",
      "Transfer by inheritance": "Yes",
      "Right of residence, study and work in the country": "Yes",
      "Right to work": "Yes",
      "Recognition of second citizenship by the state": "Yes",
      "Program Benefits": "Extended stay, Family inclusion, Tax benefits, Path to citizenship",
      "Top 10 Countries - Demand-side": "USA, China, India, Brazil, UK, Turkey, South Africa, Canada, Nigeria",
      "Minimum Investment Required": "N/A",
      "Investment options": "N/A",
      "Starting Cost for 1 person Before fees": "€24,789 remote income",
      "Cost for family of four": "€37,000 remote income",
      "Minimum holding period": "During residence permit",
      "Investment refundable": "N/A",
      "Additional requirements": "Government fees",
      "Type of document": "Temporary Residence Permit",
      "Document Validity period": "1 year, renewable",
      "Tax System": "Worldwide",
      "Personal Tax": "Up to 43%",
      "Corporate": "27.50%",
      "Capital Gains": "26%",
      "Special Tax Regime": "Yes",
      "Details of Special Tax Regime": "Same as Elective Residency",
      "Tax Treaty with the United States": "Yes",
      "Physical Residency Requirement": "183 days or more",
      "Additional Requirements": "No"
    },
    "Italy Golden Visa": {
      "PHYSICAL PRESENCE REQUIRED TO MAINTAIN STATUS": "0",
      "TIME TO PERMANENT RESIDENCY": "5",
      "Time to Citizenship / Pathway to Citizenship": "10 years",
      "PROCESSING PERIOD FROM SUBMISSION": "3-6 months",
      "VISIT THE COUNTRY FOR BIOMETRICS": "Yes",
      "Number of visa-free countries accessible": "29",
      "Visa-free access to the Schengen area": "Yes",
      "Visa-free access to the United States": "No",
      "Visa-free access to the UK": "No",
      "Visa-free access to Russia": "No",
      "Visa-free access to China": "No",
      "Family Members who can be included in application": "Spouse, children, dependent parents over 65",
      "Inclusion of new family members possible": "Yes",
      "Transfer by inheritance": "Yes",
      "Right of residence, study and work in the country": "Yes",
      "Right to work": "Yes",
      "Recognition of second citizenship by the state": "Yes",
      "Program Benefits": "Alternative to real estate, Tax advantages, Family reunification, Path to citizenship",
      "Top 10 Countries - Demand-side": "China, India, USA, Canada, Brazil, UK, Turkey",
      "Minimum Investment Required": "€250,000",
      "Investment options": "4 options available",
      "Starting Cost for 1 person Before fees": "€250,000",
      "Cost for family of four": "€250,000",
      "Minimum holding period": "5 years",
      "Investment refundable": "Investment must be sold after obtaining passport",
      "Additional requirements": "Government fees",
      "Type of document": "Temporary Residence Permit",
      "Document Validity period": "2 years, renewable for 3",
      "Tax System": "Worldwide",
      "Personal Tax": "Up to 43%",
      "Corporate": "27.50%",
      "Capital Gains": "26%",
      "Special Tax Regime": "Yes",
      "Details of Special Tax Regime": "Same as other Italy programs",
      "Tax Treaty with the United States": "Yes",
      "Physical Residency Requirement": "183 days or more",
      "Additional Requirements": "No"
    },
    "Latvia Golden Visa": {
      "PHYSICAL PRESENCE REQUIRED TO MAINTAIN STATUS": "Visit once per year",
      "TIME TO PERMANENT RESIDENCY": "5",
      "Time to Citizenship / Pathway to Citizenship": "10",
      "PROCESSING PERIOD FROM SUBMISSION": "2-4 months",
      "VISIT THE COUNTRY FOR BIOMETRICS": "Yes",
      "Number of visa-free countries accessible": "29",
      "Visa-free access to the Schengen area": "Yes",
      "Visa-free access to the United States": "No",
      "Visa-free access to the UK": "No",
      "Visa-free access to Russia": "No",
      "Visa-free access to China": "No",
      "Family Members who can be included in application": "Spouse, dependent children, dependent parents and grandparents",
      "Inclusion of new family members possible": "Yes",
      "Transfer by inheritance": "No",
      "Right of residence, study and work in the country": "Yes",
      "Right to work": "Yes",
      "Recognition of second citizenship by the state": "Yes",
      "Program Benefits": "Visa free Schengen, Family reunification, Path to citizenship, Low investment",
      "Top 10 Countries - Demand-side": "China, India, Pakistan, UK, Nigeria, Canada, USA",
      "Minimum Investment Required": "€50,000",
      "Investment options": "4 options available",
      "Starting Cost for 1 person Before fees": "€50,000",
      "Cost for family of four": "€50,000",
      "Minimum holding period": "5 years",
      "Investment refundable": "Yes",
      "Additional requirements": "Substantial government fees and proof of funds",
      "Type of document": "Temporary Residence Permit",
      "Document Validity period": "5 years, renewable",
      "Tax System": "Worldwide",
      "Personal Tax": "31%",
      "Corporate": "20%",
      "Capital Gains": "20%",
      "Special Tax Regime": "No",
      "Details of Special Tax Regime": "N/A",
      "Tax Treaty with the United States": "Yes",
      "Physical Residency Requirement": "183 days or more",
      "Additional Requirements": "No"
    },
    "Malta Permanent Residence Program": {
      "PHYSICAL PRESENCE REQUIRED TO MAINTAIN STATUS": "0",
      "TIME TO PERMANENT RESIDENCY": "0",
      "Time to Citizenship / Pathway to Citizenship": "7 years",
      "PROCESSING PERIOD FROM SUBMISSION": "11-12 months",
      "VISIT THE COUNTRY FOR BIOMETRICS": "Yes",
      "Number of visa-free countries accessible": "29",
      "Visa-free access to the Schengen area": "Yes",
      "Visa-free access to the United States": "No",
      "Visa-free access to the UK": "No",
      "Visa-free access to Russia": "No",
      "Visa-free access to China": "No",
      "Family Members who can be included in application": "Spouse, children under 18 or dependent, dependent parents/grandparents",
      "Inclusion of new family members possible": "Yes",
      "Transfer by inheritance": "N/A",
      "Right of residence, study and work in the country": "Yes",
      "Right to work": "No",
      "Recognition of second citizenship by the state": "Yes",
      "Program Benefits": "Tax advantages with non-dom, Cheapest EU residence, Plan B with minimal stay",
      "Top 10 Countries - Demand-side": "China, India, USA, Canada, UK",
      "Minimum Investment Required": "€150,000",
      "Investment options": "2 options available",
      "Starting Cost for 1 person Before fees": "€150,000",
      "Cost for family of four": "€157,500",
      "Minimum holding period": "5 years",
      "Investment refundable": "No",
      "Additional requirements": "Capital assets of €500,000, of which €150,000 must be financial",
      "Type of document": "Permanent Residence Permit",
      "Document Validity period": "5 years, renewable",
      "Tax System": "Worldwide",
      "Personal Tax": "Up to 35%",
      "Corporate": "35%",
      "Capital Gains": "15-35%",
      "Special Tax Regime": "Yes; Non-domiciled, GRP, MRP",
      "Details of Special Tax Regime": "Non-dom: remittance basis 15%, €5,000/yr. GRP: €15,000/yr flat tax. MRP: €7,500/yr minimum",
      "Tax Treaty with the United States": "Yes",
      "Physical Residency Requirement": "183 days for non-dom, 0 for GRP, 90 days/5yrs for MRP",
      "Additional Requirements": "No"
    },
    "Malta CES": {
      "PHYSICAL PRESENCE REQUIRED TO MAINTAIN STATUS": "0",
      "TIME TO PERMANENT RESIDENCY": "0",
      "Time to Citizenship / Pathway to Citizenship": "18 months",
      "PROCESSING PERIOD FROM SUBMISSION": "14 months",
      "VISIT THE COUNTRY FOR BIOMETRICS": "Yes",
      "Number of visa-free countries accessible": "190+",
      "Visa-free access to the Schengen area": "Yes",
      "Visa-free access to the United States": "Yes",
      "Visa-free access to the UK": "Yes",
      "Visa-free access to Russia": "e-visa",
      "Visa-free access to China": "No",
      "Family Members who can be included in application": "Spouse, dependent children up to 29, dependent parents/grandparents",
      "Inclusion of new family members possible": "Yes",
      "Transfer by inheritance": "Yes",
      "Right of residence, study and work in the country": "Yes",
      "Right to work": "Yes",
      "Recognition of second citizenship by the state": "Yes",
      "Program Benefits": "Fastest EU citizenship, Tier 1 passport, US/Canada/Australia visa-free, Live/work anywhere in EU",
      "Top 10 Countries - Demand-side": "China, India, USA, UK, UAE, South Africa",
      "Minimum Investment Required": "€700,000 property + €750,000 contribution",
      "Investment options": "1 option available",
      "Starting Cost for 1 person Before fees": "€690,000",
      "Cost for family of four": "€840,000",
      "Minimum holding period": "5 years",
      "Investment refundable": "No",
      "Additional requirements": "Due diligence, government fees",
      "Type of document": "Residence card, then passport",
      "Document Validity period": "Residency 36 months, Passport 5 years then 10",
      "Tax System": "Worldwide",
      "Personal Tax": "Up to 35%",
      "Corporate": "35%",
      "Capital Gains": "15-35%",
      "Special Tax Regime": "Yes; Same as Malta PRP",
      "Details of Special Tax Regime": "Same as Malta Permanent Residence Program",
      "Tax Treaty with the United States": "Yes",
      "Physical Residency Requirement": "Same as Malta PRP",
      "Additional Requirements": "No"
    },
    "Malta Digital Nomad Visa": {
      "PHYSICAL PRESENCE REQUIRED TO MAINTAIN STATUS": "At least 5 months to renew",
      "TIME TO PERMANENT RESIDENCY": "N/A",
      "Time to Citizenship / Pathway to Citizenship": "N/A",
      "PROCESSING PERIOD FROM SUBMISSION": "1-3 months",
      "VISIT THE COUNTRY FOR BIOMETRICS": "Yes",
      "Number of visa-free countries accessible": "29",
      "Visa-free access to the Schengen area": "Yes",
      "Visa-free access to the United States": "No",
      "Visa-free access to the UK": "No",
      "Visa-free access to Russia": "No",
      "Visa-free access to China": "No",
      "Family Members who can be included in application": "Spouse, children under 18, dependent children over 18 in education",
      "Inclusion of new family members possible": "N/A",
      "Transfer by inheritance": "N/A",
      "Right of residence, study and work in the country": "Right of stay only",
      "Right to work": "No",
      "Recognition of second citizenship by the state": "N/A",
      "Program Benefits": "Visa free Schengen, Family reunification, Special Tax Regime",
      "Top 10 Countries - Demand-side": "China, India, USA, UK, UAE, South Africa, Europe",
      "Minimum Investment Required": "Min income €3,500/month or €42K annually",
      "Investment options": "N/A",
      "Starting Cost for 1 person Before fees": "N/A",
      "Cost for family of four": "N/A",
      "Minimum holding period": "N/A",
      "Investment refundable": "N/A",
      "Additional requirements": "Government fees",
      "Type of document": "Temporary Residence Permit",
      "Document Validity period": "1 year, renewable twice",
      "Tax System": "Worldwide",
      "Personal Tax": "Up to 35%",
      "Corporate": "35%",
      "Capital Gains": "15-35%",
      "Special Tax Regime": "Yes; Same as Malta programs",
      "Details of Special Tax Regime": "Same as other Malta programs",
      "Tax Treaty with the United States": "Yes",
      "Physical Residency Requirement": "Same as Malta PRP",
      "Additional Requirements": "No"
    },
    "Malta Retirement Programme": {
      "PHYSICAL PRESENCE REQUIRED TO MAINTAIN STATUS": "90 days over 5 years",
      "TIME TO PERMANENT RESIDENCY": "5",
      "Time to Citizenship / Pathway to Citizenship": "7",
      "PROCESSING PERIOD FROM SUBMISSION": "2-3 months",
      "VISIT THE COUNTRY FOR BIOMETRICS": "Yes",
      "Number of visa-free countries accessible": "29",
      "Visa-free access to the Schengen area": "Yes",
      "Visa-free access to the United States": "No",
      "Visa-free access to the UK": "No",
      "Visa-free access to Russia": "No",
      "Visa-free access to China": "No",
      "Family Members who can be included in application": "Spouse, dependent children",
      "Inclusion of new family members possible": "Yes",
      "Transfer by inheritance": "No",
      "Right of residence, study and work in the country": "Yes to residence, no to work",
      "Right to work": "No",
      "Recognition of second citizenship by the state": "Yes",
      "Program Benefits": "Special tax regime for retirees, Schengen access, Mediterranean lifestyle",
      "Top 10 Countries - Demand-side": "China, India, USA, UK, UAE, South Africa, Europe",
      "Minimum Investment Required": "Property purchase/rental required",
      "Investment options": "2 options",
      "Starting Cost for 1 person Before fees": "€220,000 purchase or €8,750 annual rent",
      "Cost for family of four": "Same as single",
      "Minimum holding period": "As long as benefits desired",
      "Investment refundable": "Yes if purchasing",
      "Additional requirements": "Minimum tax €7,500/year",
      "Type of document": "Residence Permit",
      "Document Validity period": "5 years, renewable",
      "Tax System": "Worldwide",
      "Personal Tax": "Up to 35%",
      "Corporate": "35%",
      "Capital Gains": "15-35%",
      "Special Tax Regime": "Yes; MRP",
      "Details of Special Tax Regime": "15% on remitted income, €7,500 minimum tax",
      "Tax Treaty with the United States": "Yes",
      "Physical Residency Requirement": "90 days over 5 years",
      "Additional Requirements": "No"
    },
    "Malta Global Residence Programme": {
      "PHYSICAL PRESENCE REQUIRED TO MAINTAIN STATUS": "0",
      "TIME TO PERMANENT RESIDENCY": "5",
      "Time to Citizenship / Pathway to Citizenship": "7 years",
      "PROCESSING PERIOD FROM SUBMISSION": "1-2 months",
      "VISIT THE COUNTRY FOR BIOMETRICS": "Yes",
      "Number of visa-free countries accessible": "29",
      "Visa-free access to the Schengen area": "Yes",
      "Visa-free access to the United States": "No",
      "Visa-free access to the UK": "No",
      "Visa-free access to Russia": "No",
      "Visa-free access to China": "No",
      "Family Members who can be included in application": "Spouse, children under 25, parents above 55",
      "Inclusion of new family members possible": "N/A",
      "Transfer by inheritance": "N/A",
      "Right of residence, study and work in the country": "Yes",
      "Right to work": "Yes",
      "Recognition of second citizenship by the state": "Yes",
      "Program Benefits": "Visa free Schengen, Tax residency without physical presence, Special Tax Regime",
      "Top 10 Countries - Demand-side": "China, India, USA, UK, UAE, South Africa, Europe",
      "Minimum Investment Required": "€8,750",
      "Investment options": "2 options available",
      "Starting Cost for 1 person Before fees": "€8,750",
      "Cost for family of four": "€8,750",
      "Minimum holding period": "As long as benefits desired",
      "Investment refundable": "Yes if purchasing",
      "Additional requirements": "Minimum tax €15,000 payable",
      "Type of document": "Temporary Residence Permit",
      "Document Validity period": "1 year, renewable for 2 years",
      "Tax System": "Worldwide",
      "Personal Tax": "Up to 35%",
      "Corporate": "35%",
      "Capital Gains": "15-35%",
      "Special Tax Regime": "Yes",
      "Details of Special Tax Regime": "Remittance basis 15%, Flat tax €15,000/yr, no physical presence",
      "Tax Treaty with the United States": "Yes",
      "Physical Residency Requirement": "0 days",
      "Additional Requirements": "Yes, flat tax of €15,000/yr"
    },
    "Portugal Golden Visa": {
      "PHYSICAL PRESENCE REQUIRED TO MAINTAIN STATUS": "7 days per year",
      "TIME TO PERMANENT RESIDENCY": "5 years",
      "Time to Citizenship / Pathway to Citizenship": "5 years - * National Law is currently under revision - the Government intends to change it to 10 years.",
      "PROCESSING PERIOD FROM SUBMISSION": "18-24 months",
      "VISIT THE COUNTRY FOR BIOMETRICS": "Yes",
      "Number of visa-free countries accessible": "188",
      "Visa-free access to the Schengen area": "Yes",
      "Visa-free access to the United States": "No",
      "Visa-free access to the UK": "No",
      "Visa-free access to Russia": "No",
      "Visa-free access to China": "No",
      "Family Members who can be included in application": "Spouse, dependent children, dependent parents",
      "Inclusion of new family members possible": "Yes",
      "Transfer by inheritance": "Yes",
      "Right of residence, study and work in the country": "Yes",
      "Right to work": "Yes",
      "Recognition of second citizenship by the state": "Yes",
      "Program Benefits": "Access to European healthcare and education, pathway to EU citizenship, minimal stay requirements",
      "Top 10 Countries - Demand-side": "China, Brazil, USA, Turkey, South Africa, Russia, India, Pakistan, UK, Vietnam",
      "Minimum Investment Required": "€250,000",
      "Investment options": "Real estate funds, capital transfer, job creation",
      "Starting Cost for 1 person Before fees": "€250,000",
      "Cost for family of four": "Starting from €250,000",
      "Minimum holding period": "5 years",
      "Investment refundable": "Depends on root of investment chosen - Speak to a consultant for more info",
      "Additional requirements": "Clean criminal record, health insurance",
      "Type of document": "Residence Permit",
      "Document Validity period": "2 years (renewable)",
      "Tax System": "Progressive",
      "Personal Tax": "Up to 48%",
      "Corporate": "21%",
      "Capital Gains": "28%",
      "Special Tax Regime": "NHR 2.0 available - pending on elegibility",
      "Details of Special Tax Regime": "Non-Habitual Resident regime offers reduced tax rates for 10 years",
      "Tax Treaty with the United States": "Yes",
      "Physical Residency Requirement": "No",
      "Additional Requirements": "Tax representative required"
    },
    "Portugal D7 Visa": {
      "PHYSICAL PRESENCE REQUIRED TO MAINTAIN STATUS": "For the period of validation of residency permit you are expected to stay 18 consecutive months or 16 non-consecutive months",
      "TIME TO PERMANENT RESIDENCY": "5 years",
      "Time to Citizenship / Pathway to Citizenship": "5 years - * National Law is currently under revision - the Government intends to change it to 10 years.",
      "PROCESSING PERIOD FROM SUBMISSION": "3-4 months",
      "VISIT THE COUNTRY FOR BIOMETRICS": "Yes",
      "Number of visa-free countries accessible": "188",
      "Visa-free access to the Schengen area": "Yes",
      "Visa-free access to the United States": "No",
      "Visa-free access to the UK": "No",
      "Visa-free access to Russia": "No",
      "Visa-free access to China": "No",
      "Family Members who can be included in application": "Spouse, dependent children, dependent parents",
      "Inclusion of new family members possible": "Yes",
      "Transfer by inheritance": "No",
      "Right of residence, study and work in the country": "Yes",
      "Right to work": "Yes",
      "Recognition of second citizenship by the state": "Yes",
      "Program Benefits": "Low income requirements, access to healthcare and education, suitable for retirees",
      "Top 10 Countries - Demand-side": "USA, UK, Canada, Brazil, France, Germany, Netherlands, South Africa, Israel, Australia",
      "Minimum Investment Required": "€870/month passive income",
      "Investment options": "Proof of passive income",
      "Starting Cost for 1 person Before fees": "€10,500/year",
      "Cost for family of four": "€22,000/year",
      "Minimum holding period": "N/A",
      "Investment refundable": "N/A",
      "Additional requirements": "Proof of accommodation, health insurance",
      "Type of document": "Residence Permit",
      "Document Validity period": "2 years (renewable)",
      "Tax System": "Progressive",
      "Personal Tax": "Up to 48%",
      "Corporate": "21%",
      "Capital Gains": "28%",
      "Special Tax Regime": "NHR 2.0 available - pending on elegibility",
      "Details of Special Tax Regime": "Non-Habitual Resident regime offers reduced tax rates for 10 years",
      "Tax Treaty with the United States": "Yes",
      "Physical Residency Requirement": "Yes - 183 days",
      "Additional Requirements": "Must maintain tax residency"
    },
    "Spain Citizenship by Descent": {
      "PHYSICAL PRESENCE REQUIRED TO MAINTAIN STATUS": "N/A",
      "TIME TO PERMANENT RESIDENCY": "N/A",
      "Time to Citizenship / Pathway to Citizenship": "N/A",
      "PROCESSING PERIOD FROM SUBMISSION": "N/A",
      "VISIT THE COUNTRY FOR BIOMETRICS": "N/A",
      "Number of visa-free countries accessible": "N/A",
      "Visa-free access to the Schengen area": "N/A",
      "Visa-free access to the United States": "N/A",
      "Visa-free access to the UK": "N/A",
      "Visa-free access to Russia": "N/A",
      "Visa-free access to China": "N/A",
      "Family Members who can be included in application": "N/A",
      "Inclusion of new family members possible": "N/A",
      "Transfer by inheritance": "N/A",
      "Right of residence, study and work in the country": "N/A",
      "Right to work": "N/A",
      "Recognition of second citizenship by the state": "N/A",
      "Program Benefits": "N/A",
      "Top 10 Countries - Demand-side": "N/A",
      "Minimum Investment Required": "N/A",
      "Investment options": "N/A",
      "Starting Cost for 1 person Before fees": "N/A",
      "Cost for family of four": "N/A",
      "Minimum holding period": "N/A",
      "Investment refundable": "N/A",
      "Additional requirements": "N/A",
      "Type of document": "N/A",
      "Document Validity period": "N/A",
      "Tax System": "N/A",
      "Personal Tax": "N/A",
      "Corporate": "N/A",
      "Capital Gains": "N/A",
      "Special Tax Regime": "N/A",
      "Details of Special Tax Regime": "N/A",
      "Tax Treaty with the United States": "N/A",
      "Physical Residency Requirement": "N/A",
      "Additional Requirements": "N/A"
    }
  };

  // Section definitions
  const sections = [
    {
      name: "Overview",
      indicators: [
        "PHYSICAL PRESENCE REQUIRED TO MAINTAIN STATUS",
        "TIME TO PERMANENT RESIDENCY",
        "Time to Citizenship / Pathway to Citizenship",
        "PROCESSING PERIOD FROM SUBMISSION",
        "VISIT THE COUNTRY FOR BIOMETRICS"
      ]
    },
    {
      name: "Mobility Access",
      indicators: [
        "Number of visa-free countries accessible",
        "Visa-free access to the Schengen area",
        "Visa-free access to the United States",
        "Visa-free access to the UK",
        "Visa-free access to Russia",
        "Visa-free access to China"
      ]
    },
    {
      name: "Advantages",
      indicators: [
        "Family Members who can be included in application",
        "Inclusion of new family members possible",
        "Transfer by inheritance",
        "Right of residence, study and work in the country",
        "Right to work",
        "Recognition of second citizenship by the state"
      ]
    },
    {
      name: "Program Benefits",
      indicators: ["Program Benefits"],
      isSubSection: true
    },
    {
      name: "Top 10 Countries - Demand-side",
      indicators: ["Top 10 Countries - Demand-side"],
      isSubSection: true
    },
    {
      name: "Investment Requirements",
      indicators: [
        "Minimum Investment Required",
        "Investment options",
        "Starting Cost for 1 person Before fees",
        "Cost for family of four",
        "Minimum holding period",
        "Investment refundable",
        "Additional requirements"
      ]
    },
    {
      name: "Documents Client Will Receive on Successful Application",
      indicators: [
        "Type of document",
        "Document Validity period"
      ]
    },
    {
      name: "Tax",
      indicators: [
        "Tax System",
        "Personal Tax",
        "Corporate",
        "Capital Gains",
        "Special Tax Regime",
        "Details of Special Tax Regime",
        "Tax Treaty with the United States",
        "Physical Residency Requirement",
        "Additional Requirements"
      ]
    }
  ];

  const allPrograms = Object.keys(programsData).sort();
  
  const [selectedPrograms, setSelectedPrograms] = useState([
    "Portugal Golden Visa",
    "Portugal D7 Visa",
    "Spain Citizenship by Descent"
  ]);
  
  const [expandedSections, setExpandedSections] = useState(
    sections.reduce((acc, section) => ({...acc, [section.name]: true}), {})
  );

  const handleProgramChange = (index, value) => {
    const newPrograms = [...selectedPrograms];
    newPrograms[index] = value;
    setSelectedPrograms(newPrograms);
  };

  const toggleSection = (sectionName) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionName]: !prev[sectionName]
    }));
  };

  const formatValue = (value) => {
    if (!value || value === 'N/A' || value === '') {
      return <span style={{color: '#999', fontStyle: 'italic'}}>N/A</span>;
    }
    const lowerValue = value.toString().toLowerCase();
    if (lowerValue === 'yes') {
      return <span style={{color: '#00b4c5', fontWeight: 400}}>Yes</span>;
    }
    if (lowerValue === 'no') {
      return <span style={{color: '#666', fontWeight: 400}}>No</span>;
    }
    return value;
  };

  const selectorCardStyles = {
    background: 'white',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease'
  };

  return (
    <div style={{
      fontFamily: "'Roboto', sans-serif",
      background: '#ffffff',
      minHeight: '100vh',
      color: '#333333'
    }}>
      {/* Program Selector Section */}
      <div style={{
        background: '#f5f6fa',
        padding: '40px 0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          <h1 style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: '32px',
            fontWeight: 500,
            color: '#1955a6',
            marginBottom: '8px'
          }}>
            GCS Program Comparison Table
          </h1>
          <p style={{
            fontSize: '14px',
            color: '#666',
            marginBottom: '32px'
          }}>
            Choose up to 3 programs to compare side by side
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}>
            {[0, 1, 2].map(index => (
              <div key={index} style={selectorCardStyles}>
                <div style={{
                  padding: '20px'
                }}>
                  <div style={{
                    fontSize: '36px',
                    marginBottom: '12px',
                    textAlign: 'center'
                  }}>
                    {countryFlags[selectedPrograms[index]] || '🌍'}
                  </div>
                  <select
                    value={selectedPrograms[index]}
                    onChange={(e) => handleProgramChange(index, e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #e0e0e0',
                      borderRadius: '4px',
                      fontSize: '14px',
                      background: 'white',
                      cursor: 'pointer',
                      outline: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.borderColor = '#007ac1';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.borderColor = '#e0e0e0';
                    }}
                  >
                    {allPrograms.map(program => (
                      <option key={program} value={program}>
                        {program}
                      </option>
                    ))}
                  </select>
                  <div style={{
                    fontSize: '13px',
                    color: '#666',
                    marginTop: '12px',
                    lineHeight: '1.4'
                  }}>
                    {programsData[selectedPrograms[index]]?.["Tax System"] && 
                      `Tax: ${programsData[selectedPrograms[index]]["Tax System"]}`
                    }
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Comparison Tables */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 20px'
      }}>
        {sections.map(section => (
          <div key={section.name} style={{marginBottom: '40px'}}>
            {/* Section Header */}
            <div
              onClick={() => toggleSection(section.name)}
              style={{
                fontSize: '24px',
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 500,
                color: '#333',
                marginBottom: '24px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 0',
                borderBottom: '2px solid #f0f0f0'
              }}
            >
              <span>{section.name}</span>
              <ChevronDown 
                size={24} 
                style={{
                  color: '#666',
                  transform: expandedSections[section.name] ? 'rotate(0deg)' : 'rotate(-90deg)',
                  transition: 'transform 0.3s ease'
                }} 
              />
            </div>
            
            {expandedSections[section.name] && (
              <div style={{
                background: 'white',
                overflow: 'hidden'
              }}>
                {/* Table */}
                <table style={{
                  width: '100%',
                  borderCollapse: 'collapse'
                }}>
                  <thead>
                    <tr style={{
                      borderBottom: '2px solid #333'
                    }}>
                      <th style={{
                        padding: '16px',
                        textAlign: 'left',
                        fontSize: '14px',
                        fontWeight: 600,
                        width: '35%',
                        background: '#ffffff',
                        color: '#333'
                      }}>
                        {/* Empty header for indicator column */}
                      </th>
                      {selectedPrograms.map((program, index) => (
                        <th key={index} style={{
                          padding: '16px',
                          textAlign: 'left',
                          fontSize: '15px',
                          fontWeight: 600,
                          background: '#ffffff',
                          color: index === 0 ? '#1955a6' : index === 1 ? '#007ac1' : '#00b4c5'
                        }}>
                          {program}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.isSubSection ? (
                      <tr>
                        <td colSpan={4} style={{padding: '20px', background: 'white', borderBottom: '1px solid #e8e8e8'}}>
                          <div style={{
                            fontSize: '14px',
                            lineHeight: '1.6'
                          }}>
                            <div style={{
                              display: 'grid',
                              gridTemplateColumns: '35% repeat(3, 1fr)',
                              gap: '16px'
                            }}>
                              <div style={{
                                fontWeight: 400,
                                color: '#333'
                              }}>
                                {section.name}
                              </div>
                              {selectedPrograms.map((program, index) => (
                                <div key={index} style={{
                                  fontSize: '14px',
                                  color: '#666',
                                  fontWeight: 400
                                }}>
                                  {formatValue(programsData[program]?.[section.indicators[0]])}
                                </div>
                              ))}
                            </div>
                          </div>
                        </td>
                      </tr>
                    ) : (
                      section.indicators.map((indicator, idx) => (
                        <tr key={idx} style={{
                          borderBottom: '1px solid #e8e8e8'
                        }}>
                          <td style={{
                            padding: '14px 16px',
                            fontSize: '14px',
                            fontWeight: 400,
                            color: '#333',
                            background: 'white'
                          }}>
                            {indicator}
                          </td>
                          {selectedPrograms.map((program, index) => (
                            <td key={index} style={{
                              padding: '14px 16px',
                              fontSize: '14px',
                              textAlign: 'left',
                              background: 'white',
                              color: '#666',
                              fontWeight: 400
                            }}>
                              {formatValue(programsData[program]?.[indicator])}
                            </td>
                          ))}
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramComparisonTable;
