"use strict";

module.exports.all = async (req, res, next) => {
  try {
    let data = await SDK.Item.all_item();
    res.status(200).send(data);
  } catch (e) {
    next(e);
  }
};

module.exports.find = async (req, res, next) => {
  try {
    let data = await SDK.Item.find_item(req.params);
    res.status(200).send(data);
  } catch (e) {
    next(e);
  }
};

module.exports.create = async (req, res, next) => {
  try {
    let data = await SDK.Item.create_item(req.body);
    res.status(200).send(data);
  } catch (e) {
    next(e);
  }
};

module.exports.delete = async (req, res, next) => {
  try {
    let data = await SDK.Item.delete_item(req.body);
    res.status(200).send(data);
  } catch (e) {
    next(e);
  }
};

module.exports.update = async (req, res, next) => {
  try {
    let data = await SDK.Item.update_item(req);
    res.status(200).send(data);
  } catch (e) {
    next(e);
  }
};
