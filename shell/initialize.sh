#!/usr/bin/env bash

echo ">>> initialize.sh <<<"

hostname emba.io

echo "Running apt-get update..."
apt-get update
echo "Done!"

echo "Running apt-get autoremove..."
apt-get autoremove -y
echo "Done!"

echo "Running apt-get upgrade..."
apt-get upgrade -y
echo "Done!"

