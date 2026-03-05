'use client';

import React, { useState, useEffect } from 'react';
import { Heart, Lightbulb, ChevronLeft, ChevronRight, Copy, Share2, Sparkles } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { pickupLines } from '@/lib/data';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/hooks/use-toast';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [favorites, setFavorites] = useState<number[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    try {
      const storedFavorites = localStorage.getItem('halal-heart-throb-favorites');
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
      }
    } catch (error) {
      console.error('Failed to parse favorites from localStorage', error);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('halal-heart-throb-favorites', JSON.stringify(favorites));
    } catch (error) {
      console.error('Failed to save favorites to localStorage', error);
    }
  }, [favorites]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? pickupLines.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === pickupLines.length - 1 ? 0 : prevIndex + 1));
  };

  const toggleFavorite = (id: number) => {
    const isCurrentlyFavorite = favorites.includes(id);
    setFavorites((prevFavorites) =>
      isCurrentlyFavorite
        ? prevFavorites.filter((favId) => favId !== id)
        : [...prevFavorites, id]
    );

    if (!isCurrentlyFavorite) {
      toast({
        title: 'Added to Favorites!',
        description: 'You can find your favorite lines later.',
      });
    }
  };

  const copyToClipboard = (line: string) => {
    navigator.clipboard.writeText(line);
    toast({
      title: 'Copied!',
      description: 'The pickup line is now in your clipboard.',
    });
  };

  const shareLine = async (line: string) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Halal Heart Throb',
          text: line,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Share failed', err);
      }
    } else {
      copyToClipboard(line);
    }
  };

  const currentLine = pickupLines[currentIndex];
  const isFavorite = currentLine ? favorites.includes(currentLine.id) : false;

  if (!currentLine) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4 sm:p-8">
        <p>No pickup lines found!</p>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4 sm:p-8 overflow-hidden">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Sparkles className="h-6 w-6 text-primary animate-pulse" />
          <h1 className="font-headline text-5xl md:text-6xl text-primary font-bold">Halal Heart Throb</h1>
          <Sparkles className="h-6 w-6 text-primary animate-pulse" />
        </div>
        <p className="font-body text-muted-foreground mt-2">Pious pickup lines for the modern Muslim.</p>
      </div>

      <div className="w-full max-w-md mx-auto relative h-[500px]">
        <div
          key={currentLine.id}
          className="absolute inset-0 transition-opacity duration-500 ease-in-out"
        >
          <Card className="shadow-2xl bg-card rounded-2xl border-2 border-primary/10 w-full h-full flex flex-col animate-in fade-in zoom-in-95 duration-500 overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <Badge variant="secondary" className="font-semibold uppercase tracking-wider text-[10px]">
                {currentLine.category}
              </Badge>
              <CardTitle className="font-headline text-primary/60 text-sm">Line #{currentLine.id}</CardTitle>
            </CardHeader>
            <CardContent className="text-center flex-grow flex items-center justify-center px-8">
              <p className="font-body text-2xl md:text-3xl font-medium text-card-foreground leading-snug">{currentLine.line}</p>
            </CardContent>
            <CardFooter className="flex-col gap-4 pb-6 pt-0">
              <div className="flex gap-2 w-full px-6">
                <Button 
                  variant="outline" 
                  className="flex-1 rounded-xl"
                  onClick={() => copyToClipboard(currentLine.line)}
                >
                  <Copy className="mr-2 h-4 w-4" />
                  Copy
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1 rounded-xl"
                  onClick={() => shareLine(currentLine.line)}
                >
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>

              <Accordion type="single" collapsible className="w-full px-6">
                <AccordionItem value="item-1" className="border-b-0">
                  <AccordionTrigger className="w-full justify-center text-sm font-semibold text-primary hover:no-underline rounded-xl bg-accent/50 hover:bg-accent px-4 py-2 transition-colors">
                    <Lightbulb className="mr-2 h-4 w-4" />
                    Context Tip
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 text-center text-muted-foreground italic px-2">
                    "{currentLine.context}"
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={() => toggleFavorite(currentLine.id)}
                className="rounded-full h-12 w-12 hover:bg-accent group absolute top-4 right-4"
                aria-label="Mark as favorite"
              >
                <Heart
                  className={`h-6 w-6 text-primary transition-all duration-300 group-hover:scale-110 ${
                    isFavorite ? 'fill-primary' : 'fill-transparent'
                  }`}
                />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className="flex items-center justify-center gap-6 mt-8">
        <Button onClick={handlePrevious} variant="outline" size="lg" className="rounded-full shadow-md border-primary/20 bg-card hover:bg-accent transition-all hover:scale-105 active:scale-95 h-14 w-14">
          <ChevronLeft className="h-8 w-8 text-primary" />
          <span className="sr-only">Previous</span>
        </Button>
        <div className="font-body font-bold text-primary/80 bg-accent/30 px-4 py-2 rounded-full min-w-[80px] text-center shadow-inner">
          {currentIndex + 1} / {pickupLines.length}
        </div>
        <Button onClick={handleNext} variant="outline" size="lg" className="rounded-full shadow-md border-primary/20 bg-card hover:bg-accent transition-all hover:scale-105 active:scale-95 h-14 w-14">
          <ChevronRight className="h-8 w-8 text-primary" />
          <span className="sr-only">Next</span>
        </Button>
      </div>
      <Toaster />
    </main>
  );
}
