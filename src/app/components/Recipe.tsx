"use client";

import FastfoodIcon from "@mui/icons-material/Fastfood";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Typography,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";

import Footer from "./Footer";
import { CATEGORY_EMOJIS, INGREDIENTS, MENU_ITEMS } from "./Items";
import { StyledChip } from "./MenuItemCard";

export type Category = "Protein" | "Bread" | "Sauce" | "Spread" | "Topping";
export type FoodType = "Hot Dog" | "Dessert" | "Taco";

export interface Ingredient {
  id: number;
  name: string;
  category: Category;
  calories: number;
  protein: number;
  fat: number;
}

export interface Nutrition {
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
}

export interface MenuItem {
  id: number;
  name: string;
  restaurant: string;
  type: FoodType;
  foodEmojis: string;
  ingredients: string[];
  nutrition: Nutrition;
  description: string;
}

export default function MenuBuilder() {
  const [selectedIngredients, setSelectedIngredients] = useState<Ingredient[]>(
    []
  );
  const [matchingItems, setMatchingItems] = useState<MenuItem[]>([]);

  const toggleIngredient = useCallback((ingredient: Ingredient): void => {
    setSelectedIngredients((prev) => {
      const isSelected = prev.some((i) => i.id === ingredient.id);
      return isSelected
        ? prev.filter((i) => i.id !== ingredient.id)
        : [...prev, ingredient];
    });
  }, []);

  useEffect(() => {
    if (selectedIngredients.length === 0) {
      setMatchingItems([]);
      return;
    }

    const selectedNames = selectedIngredients.map((i) => i.name);
    const matches = MENU_ITEMS.filter((item) =>
      selectedNames.every((name) => item.ingredients.includes(name))
    );
    setMatchingItems(matches);
  }, [selectedIngredients]);

  return (
    <Box
      sx={{
        backgroundColor: "#87CEEB",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Bun Container - Updated with display flex and flex direction */}
      <Box
        sx={{
          position: "fixed",
          left: "50%",
          top: 0,
          bottom: 0,
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: "1200px",
          backgroundColor: "#FFE4B5",
          borderLeft: { xs: "20px", md: "40px" },
          borderRight: { xs: "20px", md: "40px" },
          borderColor: "#FFD700",
          boxShadow: "0 0 50px rgba(0,0,0,0.2)",
          overflowY: "auto",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Main content container - Added flex-grow */}
        <Box
          sx={{
            maxWidth: 1000,
            mx: "auto",
            px: { xs: 1, sm: 2 },
            pt: { xs: 3, sm: 6 },
            pb: 4,
            position: "relative",
            width: "100%",
            flexGrow: 1,
          }}
        >
          {/* Food Truck Header - Made responsive */}
          <Card
            sx={{
              backgroundColor: "#1E90FF",
              borderRadius: { xs: "20px", sm: "30px" },
              border: "6px solid #FFF",
              boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
              position: "relative",
              overflow: "visible",
              mb: { xs: 3, sm: 6 },
            }}
          >
            {/* Decorative awning */}
            <Box
              sx={{
                position: "absolute",
                top: -20,
                left: -20,
                right: -20,
                height: "30px",
                background:
                  "repeating-linear-gradient(135deg, #FF6B6B, #FF6B6B 10px, #FFE66D 10px, #FFE66D 20px)",
                borderRadius: "15px 15px 0 0",
              }}
            />

            <Box sx={{ p: { xs: 2, sm: 4 }, textAlign: "center" }}>
              <Typography
                variant="h2"
                sx={{
                  color: "#FFF",
                  fontWeight: "bold",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 2,
                  fontSize: { xs: "1.75rem", sm: "2.5rem", md: "3rem" },
                  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                }}
              >
                <LocalDiningIcon sx={{ fontSize: { xs: 24, sm: 40 } }} />
                DikinBaus Hot Dogs
                <FastfoodIcon sx={{ fontSize: { xs: 24, sm: 40 } }} />
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: "#FFE66D",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
                  fontSize: { xs: "1.1rem", sm: "1.5rem" },
                  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                }}
              >
                The Biggest Dogs in Town! 🌭
              </Typography>
            </Box>
          </Card>

          {/* Menu Builder Card */}
          <Card
            sx={{
              border: "4px solid #1E90FF",
              borderRadius: { xs: "15px", sm: "20px" },
              backgroundColor: "#FFFFE0",
              boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                top: -15,
                left: "50%",
                transform: "translateX(-50%)",
                width: "80%",
                height: "30px",
                background: "#FF6B6B",
                borderRadius: "15px 15px 0 0",
                zIndex: -1,
              },
            }}
          >
            <CardHeader
              title="Build Your Dream Dog! 🌭"
              titleTypographyProps={{
                align: "center",
                sx: {
                  fontWeight: "bold",
                  fontSize: { xs: "1.4rem", sm: "1.8rem" },
                  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                },
              }}
              sx={{
                backgroundColor: "#1E90FF",
                color: "white",
                borderBottom: "4px solid #FF6B6B",
              }}
            />

            <CardContent>
              {/* Ingredients Selection - Made responsive grid */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "repeat(2, 1fr)", // 2 items per row on mobile
                    sm: "repeat(3, 1fr)", // 3 items per row on tablet
                    md: "repeat(5, 1fr)", // 5 items per row on desktop
                  },
                  gap: { xs: 1, sm: 2 },
                  p: { xs: 1, sm: 2 },
                  backgroundColor: "rgba(255,255,255,0.7)",
                  borderRadius: "15px",
                }}
              >
                {INGREDIENTS.map((ingredient) => (
                  <Box
                    key={ingredient.id}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <StyledChip
                      label={`${CATEGORY_EMOJIS[ingredient.category]} ${
                        ingredient.name
                      }`}
                      onClick={() => toggleIngredient(ingredient)}
                      className={
                        selectedIngredients.some((i) => i.id === ingredient.id)
                          ? "selected"
                          : ""
                      }
                      sx={{
                        transition: "all 0.2s ease",
                        fontSize: { xs: "0.9rem", sm: "1.1rem" },
                        height: { xs: "40px", sm: "48px" },
                        padding: "0 16px",
                        width: "100%", // Make chips fill their container
                        "&:hover": {
                          transform: "scale(1.05)",
                        },
                        "&.selected": {
                          backgroundColor: "#FF6B6B",
                          color: "white",
                          border: "2px solid #FFE66D",
                        },
                      }}
                    />
                  </Box>
                ))}
              </Box>

              {/* Menu Items Display */}
              {selectedIngredients.length > 0 && (
                <Box mt={4}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#1E90FF",
                      borderBottom: "2px dashed #1E90FF",
                      pb: 1,
                      mb: 2,
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      fontSize: { xs: "1.1rem", sm: "1.25rem" },
                    }}
                  >
                    <FastfoodIcon /> Ready to Serve:
                  </Typography>

                  {matchingItems.map((item) => (
                    <Card
                      key={item.id}
                      sx={{
                        mt: 2,
                        border: "2px solid #FF6B6B",
                        borderRadius: "15px",
                        transition: "transform 0.2s ease",
                        "&:hover": {
                          transform: "translateY(-4px)",
                          boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
                        },
                        backgroundColor: "#FFF",
                      }}
                    >
                      <CardContent>
                        <Box
                          display="flex"
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Box>
                            <Typography
                              variant="h6"
                              sx={{
                                color: "#FF6B6B",
                                fontWeight: "bold",
                              }}
                            >
                              {item.name} - {item.foodEmojis}
                            </Typography>
                            <Typography variant="body2">
                              {item.restaurant}
                            </Typography>
                          </Box>
                          <Chip
                            label={`${item.nutrition.calories} cal`}
                            sx={{
                              backgroundColor: "#FFE66D",
                              color: "#FF6B6B",
                              fontWeight: "bold",
                              border: "2px solid #FF6B6B",
                            }}
                          />
                        </Box>

                        <Typography variant="body2">
                          {item.description}
                        </Typography>

                        <Box mt={2} display="flex" flexWrap="wrap" gap={1}>
                          {item.ingredients.map((ingredient, idx) => (
                            <StyledChip
                              key={idx}
                              label={ingredient}
                              className={
                                selectedIngredients.some(
                                  (si) => si.name === ingredient
                                )
                                  ? "selected"
                                  : ""
                              }
                            />
                          ))}
                        </Box>
                      </CardContent>
                    </Card>
                  ))}
                </Box>
              )}
            </CardContent>
          </Card>
        </Box>

        {/* Footer will now stick to bottom */}
        <Footer />
      </Box>
    </Box>
  );
}
