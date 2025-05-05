// Copyright (c) 2025 Peter Zerbinos All rights reserved
//
// Created by: Peter Zerbinos
// Created on: May 2025
// This file contains the JS functions for index.html

"use strict"

function calculateVolumeOfSphere() {
  const radiusOfSphere = parseFloat(document.getElementById('radius-of-sphere').value)

  const volumeOfSphere = (4 / 3) * (Math.PI) * (radiusOfSphere ** 3)

  document.getElementById('volume').innerHTML = 'Volume is: ' + volumeOfSphere.toFixed(2) + 'mm³'
}
