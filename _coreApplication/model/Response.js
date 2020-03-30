
exports.send_response = function(err, data, res) {

    console.log(data);
    if (err)
      res.json(err);
    console.log('res', data);
    res.json(data);
};
