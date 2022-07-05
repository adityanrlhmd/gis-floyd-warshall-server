const mongoose = require('mongoose');

const lineRouteSchema = new mongoose.Schema({
  nama: { type: String, required: true },
  warna: { type: String, required: true },
  rute: {
    type: {
      type: String,
      enum: ['Point', 'LineString'],
      default: 'LineString',
    },
    coordinates: {
      type: [[Number]],
      default: [0, 0],
    },
  },
});

lineRouteSchema.index({ rute: '2dsphere' });

const lineRoutes = mongoose.model('lineRoutes', lineRouteSchema);

module.exports = { lineRoutes };
