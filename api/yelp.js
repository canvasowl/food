import axios from "axios";

// TODO: can be retrived from an env file
const YELP_API_KEY =
  "jJyNWm-EXlUMVChWe9TOlJacxAb45qQbSIkvNwgIeQbmVUImGDd6O2ECGC_fDVGiBgr00tejcnX-ZvJRMq-u_kr0XN3JraRKAYYWx-TMyEHDhmmvePqmsj-RbVIpYXYx";
const baseURL = "https://api.yelp.com/v3/businesses";
const headers = { Authorization: `Bearer ${YELP_API_KEY}` };

export default axios.create({ baseURL, headers });
