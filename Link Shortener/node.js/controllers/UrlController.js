import UrlModel from "../models/URLsModel.js";// Url model import
import { nanoid } from "nanoid";

// ************************crud methods***************
/**
 * get all url´s
 */
export const getAllUrls = async (req, res) => {
  try {
    const allUrls = await UrlModel.findAll()
    res.json(allUrls)
  } catch (error) {
    res.json({ message: error.menssage })
  }
}

/**
 * Get URL by id or title
 * 
 * */
export const getUrl = async (req, res) => {
  try {
    // Destructure url_id and title from the query string
    const { url_id, title } = req.query;

    // Build the where clause with the provided parameters
    const whereClause = {};
    if (url_id) whereClause.url_id = url_id;
    if (title) whereClause.title = title;

    // If no parameter is provided, return a 400 error
    if (Object.keys(whereClause).length === 0) {
      return res.status(400).json({ message: "Either url_id or title must be provided." });
    }

    // Find the URL in the database based on the whereClause
    const url = await UrlModel.findOne({
      where: whereClause
    });

    // If the URL is not found, return a 404 error
    if (!url) {
      return res.status(404).json({ message: "URL not found." });
    }

    // Return the found URL
    res.json(url);
  } catch (error) {
    // Handle errors
    res.status(500).json({ message: error.message });
  }
};




/**
 * Create new URL
 */
export const createUrl = async (req, res) => {
  try {
    // Validate the input
    const { long_url } = req.body;
    if (!long_url) {
      return res.status(400).json({ message: "The long_url field is required." });
    }

    // Generate a short URL
    let shortUrlData;
    let isUnique = false;

    // Retry mechanism for collisions
    while (!isUnique) {
      shortUrlData = await shortenUrl(req.body);
      const existingUrl = await UrlModel.findOne({ where: { short_url: shortUrlData.short_url } });
      if (!existingUrl) isUnique = true;
    }

    // Save to database
    const newUrl = await UrlModel.create(shortUrlData);

    res.json({
      message: "URL created",
      data: newUrl,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Method to shorten a URL
 */
export const shortenUrl = async (body) => {
  const { long_url, user_id, title, description, expiration_date, click_limit } = body;

  // Generate a unique short URL using nanoid
  const short_url = nanoid(8); // Generates an 8-character unique string

  // Prepare the URL data
  return {
    long_url,
    short_url,
    user_id: user_id || null, // Optional user association
    title, // required title
    description: description || null, // optional description
    expiration_date: expiration_date || null, //optional description
    click_limit: click_limit || null, // optional clicl limits
  };
};

export const deleteUrl = async (req, res) => {
  try {
    // Destructure url_id and title from the query string
    const { url_id, title } = req.query;

    // Build the where clause with the provided parameters
    const whereClause = {};
    if (url_id) whereClause.url_id = url_id;
    if (title) whereClause.title = title;

    // If no parameter is provided, return a 400 error
    if (Object.keys(whereClause).length === 0) {
      return res.status(400).json({ message: "Either url_id or title must be provided." });
    }

    // Find and delete the URL in the database based on the whereClause
    const deletedRows = await UrlModel.destroy({
      where: whereClause
    });

    if (deletedRows === 0) {
      return res.status(404).json({ message: "URL not found." });
    }

    res.json({ message: "The URL was deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



