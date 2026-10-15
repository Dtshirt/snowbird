import mongoose from 'mongoose';

const QuoteSchema = new mongoose.Schema(
  {
    quoteId: { type: String, required: true, unique: true, index: true },

    fullName: { type: String, required: true, maxlength: 120 },
    firstName: { type: String, required: true, maxlength: 60 },
    lastName: { type: String, maxlength: 60, default: '' },

    email: { type: String, required: true, maxlength: 254, lowercase: true, index: true },
    phone: { type: String, required: true, maxlength: 40 },

    pickupAddress: { type: String, required: true, maxlength: 250 },
    pickupAddressLine1: { type: String, maxlength: 150, default: '' },
    pickupCity: { type: String, required: true, maxlength: 80 },
    pickupState: { type: String, required: true, maxlength: 40 },
    pickupStateShort: { type: String, maxlength: 4, default: '' },
    pickupZip: { type: String, required: true, maxlength: 10 },
    pickupLat: { type: Number, default: null },
    pickupLng: { type: Number, default: null },

    deliveryAddress: { type: String, required: true, maxlength: 250 },
    deliveryAddressLine1: { type: String, maxlength: 150, default: '' },
    deliveryCity: { type: String, required: true, maxlength: 80 },
    deliveryState: { type: String, required: true, maxlength: 40 },
    deliveryStateShort: { type: String, maxlength: 4, default: '' },
    deliveryZip: { type: String, required: true, maxlength: 10 },
    deliveryLat: { type: Number, default: null },
    deliveryLng: { type: Number, default: null },

    vehicleYear: { type: Number, required: true, min: 1950 },
    vehicleMake: { type: String, required: true, maxlength: 40 },
    vehicleModel: { type: String, required: true, maxlength: 60 },
    vehicleCondition: {
      type: String,
      required: true,
      enum: ['Running', 'Not Running']
    },

    transportType: {
      type: String,
      required: true,
      enum: ['Open Transport', 'Enclosed Transport', 'Not Sure']
    },

    pickupDate: { type: Date, required: true },

    pageType: {
      type: String,
      enum: ['home', 'state', 'route', 'destination', 'resource', 'other'],
      default: 'other',
      index: true
    },
    pageUrl: { type: String, maxlength: 300 },

    routeSlug: { type: String, maxlength: 120, index: true, default: null },
    originState: { type: String, maxlength: 40, index: true, default: null },
    destinationState: { type: String, maxlength: 40, index: true, default: null },

    source: { type: String, maxlength: 60, default: 'website' },

    utmSource: { type: String, maxlength: 60, default: null },
    utmMedium: { type: String, maxlength: 60, default: null },
    utmCampaign: { type: String, maxlength: 100, default: null },
    utmTerm: { type: String, maxlength: 100, default: null },
    utmContent: { type: String, maxlength: 100, default: null },
    referrer: { type: String, maxlength: 300, default: null },
    landingPage: { type: String, maxlength: 300, default: null },

    ipAddress: { type: String, maxlength: 60, default: null },
    userAgent: { type: String, maxlength: 300, default: null },

    status: {
      type: String,
      enum: ['new', 'contacted', 'quoted', 'booked', 'cancelled', 'completed'],
      default: 'new',
      index: true
    },

    calculatorUsed: { type: Boolean, default: false },
    estimatedLow: { type: Number, default: null },
    estimatedHigh: { type: Number, default: null },
    estimatedDistance: { type: Number, default: null },
    estimatedTransitDaysMin: { type: Number, default: null },
    estimatedTransitDaysMax: { type: Number, default: null },
    calculatorVersion: { type: String, maxlength: 40, default: null },
    calculatorSeasonLabel: { type: String, maxlength: 60, default: null },

    emailStatus: {
      customer: { type: String, enum: ['pending', 'sent', 'failed'], default: 'pending' },
      sales: { type: String, enum: ['pending', 'sent', 'failed'], default: 'pending' }
    }
  },
  { timestamps: true, collection: 'quotes' }
);

QuoteSchema.index({ createdAt: -1 });
QuoteSchema.index({ status: 1, createdAt: -1 });

export const Quote = mongoose.models.Quote || mongoose.model('Quote', QuoteSchema);
