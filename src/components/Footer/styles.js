import { styled } from "@mui/system";

export const Container = styled("footer")`
  margin: 24px auto 0 auto;
  max-width: 992px;
  justify-content: center;
  border-top: 1px solid #ddd;
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const Copyright = styled("div")`
  font-size: 14px;
  color: #666;
`;

export const Tagline = styled("div")`
  font-size: 13px;
  color: #999;
  margin-top: 4px;
`;

export const SocialLinks = styled("div")`
  margin-top: 8px;
  display: flex;
  gap: 16px;
`;

export const SocialLink = styled("a")`
  font-size: 13px;
  color: #333;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
