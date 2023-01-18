import Users from '../model/user'
export async function getUsers(req, res) {
  try {
    const users = await Users.find({});
    if(!users) return res.status(404).json({error: 'User not found'});
    res.status(200).json({users});
  } catch (error) {
    res.status(404).json({ error: 'Error can not get users' });
  }
}

export async function postUsers(req, res){
  try {
    const formData = req.body;
    if (!formData) return res.status(404).json({error: 'formData not provider'});
    Users.create(formData, function(err, data) {
      return res.status(200).json(formData);
    })
  } catch (error) {
    res.status(404).json({ error: 'Error can not post users' });
  }
}