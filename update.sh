#!/bin/bash

# 

sed -i 's%</script></head>%</script><style type="text/css">#WIX_ADS {display:none;}</style></head>%' index.html
