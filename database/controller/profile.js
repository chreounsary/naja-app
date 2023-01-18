
import Profiles from '../../model/profile';

export async function getProfiles(req, res) {
  try {
    const profiles = await Profiles.find({});
    if(!profiles) return res.status(404).json({error: 'profile not found'});
    res.status(200).json({profiles});

  } catch (error) {
    res.status(404).json({ error: 'Error can not get profile' });
  }
}

export async function postProfiles(req, res) {
  try {
    const formData = req.body;
    if (!formData) return res.status(404).json({error: 'formData not provider'});
    Profiles.create(formData, function(err, data) {
      return res.status(200).json(formData);
    })
  } catch (error) {
    res.status(404).json({ error: 'Error can not post profile' });
  }
}