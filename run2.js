#!/bin/sh
UUID=${UUID:-'7003c719-2e6d-4077-a0a3-ec5de552883e '}
sed -i "s#UUID#$UUID#g" ./config-vmess.json
