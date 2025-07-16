import { pgTable, serial, varchar, timestamp, boolean, text, bytea, integer } from 'drizzle-orm/pg-core';

// Inspections table - main inspection records
export const inspections = pgTable('inspections', {
  id: serial('id').primaryKey(),
  inspectiontype: varchar('inspectiontype', { length: 50 }),
  inspdate: timestamp('inspdate'),
  inspsite: varchar('inspsite', { length: 100 }),
  inspector: varchar('inspector', { length: 100 }),
  tractorno: varchar('tractorno', { length: 50 }),
  tcitruck: boolean('tcitruck'),
  trailerno: varchar('trailerno', { length: 50 }),
  tcitrailer: boolean('tcitrailer'),
  moveno: varchar('moveno', { length: 50 }),
  state: varchar('state', { length: 10 }),
  licenseplate: varchar('licenseplate', { length: 20 }),
  tractorstatus: varchar('tractorstatus', { length: 20 }),
  tractorinspection: boolean('tractorinspection'),
  trailerinspection: boolean('trailerinspection'),
  ctpatinspection: boolean('ctpatinspection'),
  drivervehicleinspection: boolean('drivervehicleinspection'),
  
  // Tractor inspection fields
  ti_requiredlamps: varchar('ti_requiredlamps', { length: 10 }),
  ti_rdwinshieldwipers: varchar('ti_rdwinshieldwipers', { length: 10 }),
  ti_frontwheelrimhubtire: varchar('ti_frontwheelrimhubtire', { length: 10 }),
  ti_fueltankarea: varchar('ti_fueltankarea', { length: 10 }),
  ti_exhaustsystem: varchar('ti_exhaustsystem', { length: 10 }),
  ti_lowerupperfifthwheel: varchar('ti_lowerupperfifthwheel', { length: 10 }),
  
  // Tire inspection fields with depth, ID, and brand
  ti_lf_tiredepth: varchar('ti_lf_tiredepth', { length: 10 }),
  ti_lf_tireid: varchar('ti_lf_tireid', { length: 50 }),
  ti_lf_brand: varchar('ti_lf_brand', { length: 50 }),
  ti_lfo_tiredepth: varchar('ti_lfo_tiredepth', { length: 10 }),
  ti_lfo_tireid: varchar('ti_lfo_tireid', { length: 50 }),
  ti_lfo_brand: varchar('ti_lfo_brand', { length: 50 }),
  
  // Trailer inspection fields
  tr_status: varchar('tr_status', { length: 20 }),
  tr_trailerload: varchar('tr_trailerload', { length: 100 }),
  tr_stacked: boolean('tr_stacked'),
  lst_framebody: varchar('lst_framebody', { length: 10 }),
  lst_condhoses: varchar('lst_condhoses', { length: 10 }),
  lst_slidingtandem: varchar('lst_slidingtandem', { length: 10 }),
  lst_vanopenairbody: varchar('lst_vanopenairbody', { length: 10 }),
  lst_cargosecurement: varchar('lst_cargosecurement', { length: 10 }),
  
  // CTPAT inspection fields
  ctp_tractorbumper: varchar('ctp_tractorbumper', { length: 10 }),
  ctp_tractorengine: varchar('ctp_tractorengine', { length: 10 }),
  ctp_tractortires: varchar('ctp_tractortires', { length: 10 }),
  ctp_tractorfloor: varchar('ctp_tractorfloor', { length: 10 }),
  ctp_tractorcab: varchar('ctp_tractorcab', { length: 10 }),
  
  // Driver vehicle inspection fields
  dv_aircompressor: varchar('dv_aircompressor', { length: 10 }),
  dv_airlines: varchar('dv_airlines', { length: 10 }),
  dv_battery: varchar('dv_battery', { length: 10 }),
  dv_body: varchar('dv_body', { length: 10 }),
  dv_brakeaccessories: varchar('dv_brakeaccessories', { length: 10 }),
  dv_brakeparking: varchar('dv_brakeparking', { length: 10 }),
  dv_brakeservice: varchar('dv_brakeservice', { length: 10 }),
  dv_clutch: varchar('dv_clutch', { length: 10 }),
  dv_engine: varchar('dv_engine', { length: 10 }),
  dv_exhaust: varchar('dv_exhaust', { length: 10 }),
  dv_lights: varchar('dv_lights', { length: 10 }),
  dv_mirrors: varchar('dv_mirrors', { length: 10 }),
  dv_steering: varchar('dv_steering', { length: 10 }),
  dv_tires: varchar('dv_tires', { length: 10 }),
  dv_transmission: varchar('dv_transmission', { length: 10 }),
  
  // Marker lights and signals
  markerlightsleftfront: boolean('markerlightsleftfront'),
  markerlightsleftcenter: boolean('markerlightsleftcenter'),
  markerlightsleftrear: boolean('markerlightsleftrear'),
  markerlightsrear: boolean('markerlightsrear'),
  sideturnsignalsleft: boolean('sideturnsignalsleft'),
  sideturnsignalsright: boolean('sideturnsignalsright'),
  rearlightsleftturn: boolean('rearlightsleftturn'),
  rearlightsrightturn: boolean('rearlightsrightturn'),
  
  // Additional fields
  ti_signature: varchar('ti_signature', { length: 100 }),
  ti_initials: varchar('ti_initials', { length: 10 }),
  drivername: varchar('drivername', { length: 100 }),
  companyname: varchar('companyname', { length: 100 }),
  note: text('note'),
  mexicancarrier: varchar('mexicancarrier', { length: 100 }),
  mexicanbroker: varchar('mexicanbroker', { length: 100 }),
  mexicancustomer: varchar('mexicancustomer', { length: 100 }),
  pestcontamination: varchar('pestcontamination', { length: 10 }),
  recguid: varchar('recguid', { length: 50 }),
});

// Inspection images table
export const inspimage = pgTable('inspimage', {
  id: serial('id').primaryKey(),
  inspectionid: integer('inspectionid'),
  inspectionItem: varchar('inspectionItem', { length: 100 }),
  Inspectiontype: varchar('Inspectiontype', { length: 50 }),
  datetimestamp: timestamp('datetimestamp'),
  img_image: varchar('img_image', { length: 255 }),
  imgbuffer: bytea('imgbuffer'),
  img_name: varchar('img_name', { length: 100 }),
});

// Drivers table
export const drivers = pgTable('drivers', {
  id: serial('id').primaryKey(),
  lastname: varchar('lastname', { length: 50 }),
  firstname: varchar('firstname', { length: 50 }),
  drivertype: varchar('drivertype', { length: 20 }),
  tractorno: varchar('tractorno', { length: 50 }),
});

// Email settings table
export const emailsettings = pgTable('emailsettings', {
  id: serial('id').primaryKey(),
  lastname: varchar('lastname', { length: 50 }),
  firstname: varchar('firstname', { length: 50 }),
  reporttype: varchar('reporttype', { length: 50 }),
  emailaddr: varchar('emailaddr', { length: 100 }),
});

// Monthly inspection table
export const monthlyinspection = pgTable('monthlyinspection', {
  id: serial('id').primaryKey(),
  insplocation: varchar('insplocation', { length: 100 }),
  typeinspection: varchar('typeinspection', { length: 50 }),
  inspector: varchar('inspector', { length: 100 }),
  inspdate: timestamp('inspdate'),
  fencebothsidesclear: varchar('fencebothsidesclear', { length: 10 }),
  fencehasholes: varchar('fencehasholes', { length: 10 }),
  fenceblockedtreesvegetation: varchar('fenceblockedtreesvegetation', { length: 10 }),
  trashcontainersavailable: varchar('trashcontainersavailable', { length: 10 }),
  trashcontainersfull: varchar('trashcontainersfull', { length: 10 }),
  trashremovalproceduresevident: varchar('trashremovalproceduresevident', { length: 10 }),
  trashcontainerleakholes: varchar('trashcontainerleakholes', { length: 10 }),
  trashcontainerneedreplaced: varchar('trashcontainerneedreplaced', { length: 10 }),
  trashcontainermoreneeded: varchar('trashcontainermoreneeded', { length: 10 }),
  fencerepair: varchar('fencerepair', { length: 10 }),
  trashcontainerhavelids: varchar('trashcontainerhavelids', { length: 10 }),
});