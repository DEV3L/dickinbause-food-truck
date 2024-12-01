"use client";

import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Chip,
  styled,
  Typography,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";

import {
  CATEGORY_EMOJIS,
  FOOD_TYPE_EMOJIS,
  INGREDIENTS,
  MENU_ITEMS,
} from "./Items";
import { Ingredient, MenuItem } from "./Recipe";

export default function RecipeFinder() {
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
      selectedNames.some((name) => item.ingredients.includes(name))
    );
    setMatchingItems(matches);
  }, [selectedIngredients]);

  return (
    <Box
      sx={{
        backgroundColor: "#87CEEB",
        minHeight: "100vh",
        py: 4,
        backgroundImage: "linear-gradient(#87CEEB, #B0E0E6)",
      }}
    >
      <Box sx={{ maxWidth: 800, mx: "auto", px: 2 }}>
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{
            color: "#1E90FF",
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          }}
        >
          DikinBaus Hot Dogs
        </Typography>
        <Typography
          variant="h5"
          align="center"
          sx={{
            color: "#FF6B6B",
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            mb: 3,
          }}
        >
          The Biggest Dogs in Town! 🌭
        </Typography>

        <Card
          sx={{
            mt: 4,
            border: "4px solid #1E90FF",
            borderRadius: "20px",
            backgroundColor: "#FFFFE0",
            boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
          }}
        >
          <CardHeader
            title="Build Your Hot Dog! 🌭"
            titleTypographyProps={{
              align: "center",
              sx: {
                fontWeight: "bold",
                fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                fontSize: "1.8rem",
              },
            }}
            sx={{ backgroundColor: "#1E90FF", color: "white" }}
          />
          <CardContent>
            <Box display="flex" flexWrap="wrap" gap={2} justifyContent="center">
              {INGREDIENTS.map((ingredient) => (
                <Box key={ingredient.id}>
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
                      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                      transition: "all 0.2s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                  />
                </Box>
              ))}
            </Box>
            {selectedIngredients.length > 0 && (
              <Box mt={4}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#1E90FF",
                    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                    borderBottom: "2px dashed #1E90FF",
                    pb: 1,
                    mb: 2,
                  }}
                >
                  Your Hot Dog Options:
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
                      <Box display="flex" justifyContent="space-between">
                        <Box>
                          <Typography
                            variant="h6"
                            sx={{
                              color: "#FF6B6B",
                              fontWeight: "bold",
                              fontFamily:
                                '"Roboto", "Helvetica", "Arial", sans-serif',
                            }}
                          >
                            {item.name} {FOOD_TYPE_EMOJIS[item.type]}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#1E90FF",
                              fontFamily:
                                '"Roboto", "Helvetica", "Arial", sans-serif',
                            }}
                          >
                            {item.restaurant}
                          </Typography>
                        </Box>
                        <Chip
                          label={`${item.nutrition.calories} cal`}
                          sx={{
                            backgroundColor: "#FFE66D",
                            color: "#FF6B6B",
                            fontFamily:
                              '"Roboto", "Helvetica", "Arial", sans-serif',
                            fontWeight: "bold",
                          }}
                        />
                      </Box>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#666",
                          mt: 1,
                          fontFamily:
                            '"Roboto", "Helvetica", "Arial", sans-serif',
                        }}
                      >
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
                            sx={{
                              fontFamily:
                                '"Roboto", "Helvetica", "Arial", sans-serif',
                            }}
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
    </Box>
  );
}

export const StyledChip = styled(Chip)({
  cursor: "pointer",
  border: "2px solid #e0e0e0",
  "&.selected": {
    backgroundColor: "#FFCC80",
    border: "2px solid #FF8A65",
  },
  "&:hover": {
    borderColor: "#FF8A65",
  },
});
