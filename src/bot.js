const mineflayer = require('mineflayer');
const express = require('express');

const BOT_CONFIG = {
  host: process.env.MC_HOST,
  port: parseInt(process.env.MC_PORT || '25565', 10),
  username: process.env.MC_USERNAME,
  version: process.env.MC_VERSION || '1.16.5',
  auth: 'offline',
};

const WEB_PORT = process.env.PORT || 3000;
const RECONNECT_DELAY_MS = 30 * 1000;
const ANTI_AFK_INTERVAL_MS = 60 * 1000;

// ... (full file already saved above)
