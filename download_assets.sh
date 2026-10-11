#!/bin/bash
set -e

echo "Downloading hero video..."
curl -sSL "https://xtremeclean.cl/wp-content/uploads/2024/09/BANNER-VIDEOS.mp4" -o raw_hero.mp4

echo "Processing hero video (720p, no audio, CRF 28)..."
ffmpeg -y -i raw_hero.mp4 -an -vf "scale=-2:720" -c:v libx264 -crf 28 -preset fast public/video/hero.mp4
ffmpeg -y -i raw_hero.mp4 -an -vf "scale=-2:720" -c:v libvpx-vp9 -crf 34 -b:v 0 public/video/hero.webm

echo "Generating poster..."
ffmpeg -y -ss 00:00:01 -i raw_hero.mp4 -vframes 1 -vf "scale=1280:-2" public/video/hero-poster.webp

echo "Generating card video clip (8s)..."
ffmpeg -y -ss 00:00:02 -t 7 -i raw_hero.mp4 -an -vf "scale=-2:480" -c:v libx264 -crf 28 -preset fast public/video/card.mp4
ffmpeg -y -ss 00:00:02 -t 7 -i raw_hero.mp4 -an -vf "scale=-2:480" -c:v libvpx-vp9 -crf 34 -b:v 0 public/video/card.webm

echo "Downloading photos..."
curl -sSL "https://xtremeclean.cl/wp-content/uploads/2023/11/Limpieza-de-Sofa-4-min-e1701111314896.jpg" -o public/photos/sofa.jpg
curl -sSL "https://xtremeclean.cl/wp-content/uploads/2023/11/Limpieza-de-Colchon-2-min-e1701111396908.jpg" -o public/photos/colchon.jpg
curl -sSL "https://xtremeclean.cl/wp-content/uploads/2023/11/Alfombras-3-min-e1701108504334.jpg" -o public/photos/alfombras.jpg
curl -sSL "https://xtremeclean.cl/wp-content/uploads/2023/11/Decapado-de-piso-flotante-1-min-e1701108594776.jpg" -o public/photos/decapado.jpg
curl -sSL "https://xtremeclean.cl/wp-content/uploads/2023/11/Limpieza-de-Cocina-3-e1701111521823.jpg" -o public/photos/cocina.jpg
curl -sSL "https://xtremeclean.cl/wp-content/uploads/2023/11/Limpieza-de-inmuebles-Pre-y-Post-mudanza-2-min-e1701108670558.jpg" -o public/photos/mudanza.jpg
curl -sSL "https://xtremeclean.cl/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-16-at-10.07.21-AM.jpeg" -o public/photos/horno.jpg

echo "Converting photos to webp..."
for f in public/photos/*.jpg; do
  name=$(basename "$f" .jpg)
  convert "$f" -resize 800x -quality 85 "public/photos/${name}.webp"
done

echo "Downloading logo and client logos..."
curl -sSL "https://xtremeclean.cl/wp-content/uploads/2021/08/1-e1700830669679.png" -o public/logos/logo.png
curl -sSL "https://xtremeclean.cl/wp-content/uploads/elementor/thumbs/Rienda-suelta-qu0578hfygg30nttu4yd0yri46gn6qn03uy3sfdyps.png" -o public/logos/rienda-suelta.png
curl -sSL "https://xtremeclean.cl/wp-content/uploads/elementor/thumbs/Blck-qu057bayiyjxzhpqdo68qg1vwc2qtty748wk899s74.png" -o public/logos/blck.png
curl -sSL "https://xtremeclean.cl/wp-content/uploads/elementor/thumbs/Gulfo-qu057c8spsl8b3od86kvaxtchpy41j1xgdk1pj8e0w.jpeg" -o public/logos/gulfo.jpg

rm raw_hero.mp4
echo "Done!"
ls -lh public/video public/photos public/logos
